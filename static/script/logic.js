let coords = { lat: 48.137154, lng: 11.576124 };
let proximityCheck = true;
let MaxLoadedAmount = 40;

let wifiLayer = L.markerClusterGroup();
let locationLayer = L.markerClusterGroup();
let interestingPoints = L.markerClusterGroup();
let commonBuildings = L.markerClusterGroup();
let nonClassified = L.markerClusterGroup();
let colorLayer = new L.StamenTileLayer("watercolor");
let terrainLayer = new L.StamenTileLayer("terrain");
let tonerLayer = new L.StamenTileLayer("toner");

let map = L.map('map').setView([48.137154, 11.576124], 17);
map.addLayer(colorLayer);
map.addLayer(interestingPoints);
map.addLayer(commonBuildings);
map.addLayer(nonClassified);
map.addLayer(wifiLayer);
let layerControl = L.control.layers({
    "Watercolor Map": colorLayer,
    "Terrain Map": terrainLayer,
    "Monochromatic Map": tonerLayer
}, {
    "Interesting POIs": interestingPoints,
    "Common Buildings": commonBuildings,
    "Exceptional POIs": nonClassified,
    "Wifi Hotspots": wifiLayer,
    "Your Location": locationLayer
});

document.onkeydown = function(e) {
    if(e.key === 'x' && proximityCheck) {
        proximityCheck = false;
        loadPOIs();
    }
}

document.onkeyup = function(e) {
    if(e.key === 'x' && !proximityCheck) {
        proximityCheck = true;
        loadPOIs();
    }
}

layerControl.addTo(map);
map.locate({setView: false});

function distance(posA, posB) {
    return Math.sqrt(Math.pow(posA.lat - posB.lat, 2) + Math.pow(posA.lng - posB.lng, 2));
}

function evaluateWeight(item){
    let answer = 1.0;
    if(/href=/.test(item.description)) answer *= 2.0;
    if(!item.image) answer *= 0.4;
    if(!item.link) answer *= 0.6;
    if(item.description.length < 30) answer *= 0.7;
    return answer;
}

function poiInfo(poi) {
    let header = `${poi.name}`;
    if(poi.link) {
        header = `<a href="${poi.link}">${header}</a>`;
    }
    return `${header} ${poi.description}`;
}

function poiHeader(poi) {
    let header = `<b>${poi.name}</b>`;
    if(poi.link) {
        header = `<a href="${poi.link}">${header}</a>`;
    }
    return `<h3>${header}</h3>`;
}

function poiCard(poi) {
    let result = '';
    if(poi.image) {
        result += `<img 
            class="poi-image"
            src="${poi.image}" 
            alt="${poi.name}" 
            style="width: 100%; height: auto;">`;
    }
    return poiHeader(poi) + result + poiInfo(poi);
}

function loadPOIs() {
    let proximity = 0.005;

    let counter = 0;
    for(const array of [museums, memorials, statues]) {
        for(const item of array) {
            let dist = distance(item, coords);
            if(!proximityCheck || dist < proximity) {
                counter ++;
            }
        }
    }
    //TODO: change depending on amount found
    interestingPoints = interestingPoints.clearLayers();
    commonBuildings = commonBuildings.clearLayers();
    nonClassified = nonClassified.clearLayers();
    wifiLayer = wifiLayer.clearLayers();
    let sortedMap = {};
    for(const array of [museums, memorials, statues]) {
        for(const item of array) {
            let dist = distance(item, coords);
            if(!proximityCheck || dist < proximity) {
                if(!proximityCheck) {
                    let marker = L.marker([item.lat, item.lng], {
                        icon: icon(item),
                        alt: `poi-${item.type}`
                    });
                    marker.bindPopup(poiCard(item));
                    if (item.type === 'unsure') {
                        nonClassified.addLayer(marker);
                    } else if (['Wohnhaus', 'Geschäftshaus'].includes(item.type)) {
                        commonBuildings.addLayer(marker);
                    } else {
                        interestingPoints.addLayer(marker);
                    }
                }else{
                    sortedMap[dist/evaluateWeight(item)] = item;
                }
            }
        }
    }
    if(proximityCheck) {
        const keys = Object.keys(sortedMap).sort();
        counter = 0;
        for(const key of keys) {
            if(counter > MaxLoadedAmount) break;
            let item = sortedMap[key];
            let marker = L.marker([item.lat, item.lng], {
                icon: icon(item),
                alt: `poi-${item.type}`
            });
            marker.bindPopup(poiCard(item));
            if (item.type === 'unsure') {
                nonClassified.addLayer(marker);
            } else if (['Wohnhaus', 'Geschäftshaus'].includes(item.type)) {
                commonBuildings.addLayer(marker);
            } else {
                interestingPoints.addLayer(marker);
            }
            counter++;
        }
    }
    for(const hotspot of wifi) {
        if(!proximityCheck || distance(hotspot, coords) < proximity) {
            let wifiArea = L.circle([hotspot.lat, hotspot.lng], {
                color: 'blue',
                fillColor: '#00307f',
                fillOpacity: 0.25,
                radius: 4 * hotspot.count
            });
            wifiArea.addTo(wifiLayer);
        }
    }
}

map.on('locationfound', (e) => {
    let radius = e.accuracy;
    let loc = e.latlng;
    map.flyTo(loc, 16);
    locationLayer = locationLayer.clearLayers();
    L.circle(loc, radius).addTo(locationLayer);
    locationLayer.addTo(map);
    coords = loc;
    loadPOIs();
});

map.on('click', (e) => {
    let loc = e.latlng;
    map.flyTo(loc, 16);
    locationLayer = locationLayer.clearLayers();
    L.circle(loc, 10).addTo(locationLayer);
    coords = loc;
    loadPOIs();
});
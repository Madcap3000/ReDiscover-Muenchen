const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let coords = {lat: 48.1375, lng: 11.575556};
let proximityCheck = true;
let MaxLoadedAmount = 60;
const munichCoords = {lat: 48.137154, lng: 11.576124};
let startCoords = munichCoords;
let defaultZoom = 17;
let proximity = 0.008;

let wifiLayer = L.markerClusterGroup();
let beerLayer = L.markerClusterGroup();
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
map.addLayer(locationLayer);
let layerControl = L.control.layers({
    "Watercolor Map": colorLayer,
    "Terrain Map": terrainLayer,
    "Monochromatic Map": tonerLayer
}, {
    "Interessante Punkte": interestingPoints,
    "Häuser": commonBuildings,
    "Besondere POIs": nonClassified,
    "Biergärten": beerLayer,
    "Wifi Hotspots": wifiLayer,
    "Mein Standort": locationLayer
}, {});

document.onkeyup = function (e) {
    console.log(`KEY-EVENT: (${e.key}; ${e.code})`);
    if (e.code === 'KeyX') {
        proximityCheck = !proximityCheck;
        loadPOIs();
    } else if (e.code === 'KeyM') {
        warp(munichCoords.lat, munichCoords.lng);
    } else if(e.code === 'BracketLeft') {
        map.zoomIn();
    } else if(e.code === 'BracketRight') {
        map.zoomOut();
    } else if(['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(e.code)) {
        const step = 0.0004;
        coords = ({
            "ArrowUp": { lat: coords.lat + step, lng: coords.lng },
            "ArrowLeft": { lat: coords.lat, lng: coords.lng - step },
            "ArrowDown": { lat: coords.lat - step, lng: coords.lng },
            "ArrowRight": { lat: coords.lat, lng: coords.lng + step }
        })[e.key];
        warp(coords.lat, coords.lng);
    }
}

layerControl.addTo(map);
map.locate({setView: false});

function distance(posA, posB) {
    return Math.sqrt(Math.pow(posA.lat - posB.lat, 2) + Math.pow(posA.lng - posB.lng, 2));
}

function drawMe(loc){
    //L.circle(loc, e,{fillColor: 'rgba(211,49,49,0.99)', stroke: false, fillOpacity: 0.8} ).addTo(locationLayer);
    let iconData = {
        iconUrl: `icons/MapPointer.png`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        className: "MyPos"
    };
    if(isMobile) {
        for(let key of ['iconSize', 'iconAnchor']) {
            iconData[key] = iconData[key].map(x => x << 1);
        }
    }
    let i = L.icon(iconData);
    L.marker(loc, {icon: i}).addTo(locationLayer);
}

function evaluateWeight(item) {
    let answer = 1.0;
    if (/href=/.test(item.description)) answer *= 1.2;
    if (!item.image) answer *= 0.8;
    if (!item.link) answer *= 0.95;
    if (item.description.length < 30) answer *= 0.9;
    return answer;
}

function poiInfo(poi) {
    let header = `${poi.name}`;
    if (poi.link) {
        header = `<a href="${poi.link}">${header}</a>`;
    }
    return `${header} ${poi.description}`;
}

function poiHeader(poi) {
    let header = `<b>${poi.name}</b>`;
    if (poi.link) {
        header = `<a href="${poi.link}">${header}</a>`;
    }
    return `<h3>${header}</h3>`;
}

function poiCard(poi, dist) {
    let result = '';
    if (poi.image) {
        result += `<img 
        class="poi-image"
        src="${poi.image}" 
        alt="${poi.name}" 
        style="width: 100%; height: auto;">`;
    }
    //          lng,lat to km
    let aTime= Math.ceil(((dist * 111)/(4.43))*60);
    let distHtml;
    if(aTime === 1){
        distHtml = "<a style='color: lightslategray'><img height='12px' width='auto' src='icons/Time.png' alt='~'/> " + aTime  + " Minute entfernt</a><br/>";
    }else {
        distHtml = "<a style='color: lightslategray'><img height='12px' width='auto' src='icons/Time.png' alt='~'/> " + aTime + " Minuten entfernt</a><br/>";
    }
    return poiHeader(poi) + distHtml + result + poiInfo(poi);
}

function loadPOIs() {

    let counter = 0;
    for (const array of [museums, memorials, statues]) {
        for (const item of array) {
            let dist = distance(item, coords);
            if (!proximityCheck || dist < proximity) {
                counter++;
            }
        }
    }
    interestingPoints = interestingPoints.clearLayers();
    commonBuildings = commonBuildings.clearLayers();
    nonClassified = nonClassified.clearLayers();
    wifiLayer = wifiLayer.clearLayers();
    let sortedMap = {};
    for (const array of [museums, memorials, statues]) {
        for (const item of array) {
            let dist = distance(item, coords);
            if (!proximityCheck || dist < proximity) {
                if (!proximityCheck) {
                    let marker = L.marker([item.lat, item.lng], {
                        icon: icon(item),
                        alt: `poi-${item.type}`
                    });
                    marker.bindPopup(poiCard(item, dist));
                    if (item.type === 'unsure') {
                        nonClassified.addLayer(marker);
                    } else if (['Wohnhaus', 'Geschäftshaus'].includes(item.type)) {
                        commonBuildings.addLayer(marker);
                    } else {
                        interestingPoints.addLayer(marker);
                    }
                } else {
                    sortedMap[dist / evaluateWeight(item)] = {i: item, d: dist};
                }
            }
        }
    }
    if (proximityCheck) {
        const keys = Object.keys(sortedMap).sort();
        counter = 0;
        for (const key of keys) {
            if (counter > MaxLoadedAmount) break;
            let item = sortedMap[key].i;
            let marker = L.marker([item.lat, item.lng], {
                icon: icon(item),
                alt: `poi-${item.type}`
            });
            marker.bindPopup(poiCard(item, sortedMap[key].d));
            if (item.type === 'unsure') {
                nonClassified.addLayer(marker);
            } else if (['Wohnhaus', 'Geschäftshaus'].includes(item.type)) {
                commonBuildings.addLayer(marker);
            } else if(item.type === 'Biergarten') {
                beerLayer.addLayer(marker);
            } else {
                interestingPoints.addLayer(marker);
            }
            counter++;
        }
    }
    for (const hotspot of wifi) {
        if (!proximityCheck || distance(hotspot, coords) < proximity) {
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
    map.flyTo(loc, defaultZoom);
    locationLayer = locationLayer.clearLayers();
    drawMe(loc, radius);
    coords = loc;
    startCoords = loc;
    loadPOIs();
});

L.Control.CustomControl = L.Control.extend({
    options: {
        position: 'topright'
    },
    onAdd: function (map) {
        let container = L.DomUtil.create('input');
        container.type = "button";
        container.title = "FindMe";
        container.style.backgroundImage = "url('icons/MapPointer.png')";
        container.style.backgroundSize = "44px 44px";
        container.style.width = '47px';
        container.style.height = '47px';
        container.style.borderRadius = "5px";
        container.style.backgroundColor = 'rgb(255,255,255)';
        container.style.borderColor = 'rgba(133,133,133,0.5)';

        function onClick(){
            map.locate({setView: false});
        }
        function out() {
            map.on('click', (e) => {
                let loc = e.latlng;
                map.flyTo(loc, defaultZoom);
                locationLayer = locationLayer.clearLayers();
                drawMe(loc, 10);
                coords = loc;
                loadPOIs();
            });
        }
        container.onmouseover = function () {
            map.off('click');
        }
        container.ontouchstart = function () {
            map.off('click');
        }
        container.onmouseout = out;
        container.ontouchend = out;
        container.onclick = onClick;
        return container;
    }
});

L.control.customControl = function (opts) {
    return new L.Control.CustomControl(opts);
}

L.control.customControl().addTo(map);

map.on('popupopen', function(e) {
    let px = map.project(e.target._popup._latlng);
    let po = map.project(map.getCenter());
    px.x = (po.x + px.x)/2;
    px.y -= e.target._popup._container.clientHeight/2;
    map.panTo(map.unproject(px),{animate: true});
});

map.on('click', (e) => {
    let loc = e.latlng;
    map.flyTo(loc, defaultZoom);
    locationLayer = locationLayer.clearLayers();
    drawMe(loc, 10);
    coords = loc;
    loadPOIs();
});
let layer = new L.StamenTileLayer("watercolor");
let map = L.map('map').setView([48.137154, 11.576124], 17);
map.addLayer(layer);
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    let radius = e.accuracy;
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
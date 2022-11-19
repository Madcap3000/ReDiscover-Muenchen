let layer = new L.StamenTileLayer("watercolor");
let map = L.map('map').setView([48.137154, 11.576124], 17);
map.addLayer(layer);
map.locate({setView: true, maxZoom: 16});

for(const museum of museums) {
    let marker = L.marker([museum.lat, museum.lng]).addTo(map);
    marker.bindPopup(museum.name);
}

for(const memorial of memorials) {
    let marker = L.marker([memorial.lat, memorial.lng]).addTo(map);
    marker.bindPopup(memorial.name);
}

for(const statue of statues) {
    let marker = L.marker([statue.lat, statue.lng]).addTo(map);
    marker.bindPopup(statue.name);
}

map.on('locationfound', onLocationFound);
function onLocationFound(e) {
    let radius = e.accuracy;
    L.circle(e.latlng, radius).addTo(map);
}

/**
 * @typedef {Object} Sight
 * @property {string} name
 * @property {string | undefined} link
 * @property {string | undefined} image
 * @property {string} type
 * @property {string} lat
 * @property {string} lng 
 */

const sightImportance = {
  "museum": 1.0,
};

/**
 * Calculates the importance of a sight based on 
 * several factors.
 * 
 * @param {Sight} sight
 * @returns {number}
 */
function weigh(sight) {
  let weight = 1.0;
  if(!sight.link) weight /= 3.0;
  if(!sight.image) weight /= 2.0;
  if(sight.type in sightImportance) {
    weight *= sightImportance[sight.type];
  } else {
    weight *= 0.75;
  }
  
  return weight;
}

/**
 * Finds an appropriate icon-string for the sight.
 * 
 * @param {Sight} sight
 * @returns {string} 
 */
function icon(sight) {
  const poiResources = {
    'Schloss': 'Castle-01',
    'Denkmal': 'Monument-01',
    'Werkstatt': 'Factory-01',
    'Brunnen': 'Fountain-01',
    'Skulptur': 'Monument-01',
    'Friedhof': 'Graveyard-01',
    'Brücke': 'Bridge-01',
    'Kirche': 'Church-01',
    'Wohnhaus': 'House-01',
    'Geschäftshaus': 'House-01',
    'Villa': 'Villa-01',
    'Wohnblock': 'House-01',
    'Schulhaus': 'School-01',
    'Wegkreuz': 'Crossroad-01',
    'museum': 'Museum-01',
    'statue': 'Monument-01',
    'Biergarten': 'Beer-01'
  };
  //icons creator Mikhail Zhukov(https://www.behance.net/michailzhukov)
  let str = (sight.type in poiResources) ?
    poiResources[sight.type] : 'Question-01';

  const iconData = {
    iconUrl: `icons/${str}.png`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  };

  if(isMobile) {
    for(let key of ['iconSize', 'iconAnchor', 'popupAnchor']) {
      iconData[key] = iconData[key].map(x => x << 1);
    }
  }
  return L.icon(iconData);
}

function warp(lat, lng, radius) {
  if(!radius) radius = 0.005;
  map.flyTo([lat, lng], 16);
  locationLayer = locationLayer.clearLayers();
  L.circle([lat, lng], radius).addTo(locationLayer);
  coords = [lat, lng];
  loadPOIs();
}
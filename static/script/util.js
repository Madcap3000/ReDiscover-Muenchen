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
    'Schloss': 'castle',
    'Denkmal': 'Monument-01',
    'Werkstatt': 'workshop',
    'Brunnen': 'well',
    'Skulptur': 'sculpture',
    'Friedhof': 'cemetary',
    'Brücke': 'bridge',
    'Kirche': 'church',
    'Wohnhaus': 'house',
    'Geschäftshaus': 'shop',
    'Villa': 'villa',
    'Wohnblock': 'house',
    'Schulhaus': 'education',
    'Wegkreuz': 'intersection',
    'museum': 'museum',
    'statue': 'sculpture'
  };
  let str = (sight.type in poiResources) ?
    poiResources[sight.type] : 'unknown';
  return L.icon({
    iconUrl: `icon/${str}.png`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
}
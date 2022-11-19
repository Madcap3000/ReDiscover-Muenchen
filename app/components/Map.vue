<template>
  <l-map 
    :style="style" 
    :zoom="13" 
    :maxZoom="19" 
    :minZoom="9" 
    :center="center">
    <l-tile-layer :url="url" :attribution="attribution"/>
    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
  </l-map>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      geojson: {
        type: "FeatureCollection",
        features: []
      },
      geojsonOptions: {

      },
      //url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      center: [48.13743, 11.57549],
      style: `height: 100vh; width: 70vw;`
    }
  },
  async beforeMount() {
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    this.geojsonOptions.pointToLayer = (feature, latLng) => 
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  }
};
</script>
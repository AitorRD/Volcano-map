<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';

export default {
    mounted() {
        var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
}
</script>

<style>
#map { height: 400px; }
</style>
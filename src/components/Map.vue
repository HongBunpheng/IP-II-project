<template>
    <div class="map-box">
        <!-- <h3>📍 Click on the map to choose a location</h3> -->
        <div class="map-container" ref="mapContainer"></div>
    </div>
</template>

<script>
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default {
    name: "MapBox",
    data() {
        return {
            map: null,
            marker: null,
        }
    },
    mounted() {
        this.initMap()
    },
    methods: {
        initMap() {
            this.map = L.map(this.$refs.mapContainer).setView([11.5564, 104.9282], 13)

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            }).addTo(this.map)

            this.map.on("click", (e) => {
                const lat = e.latlng.lat.toFixed(5)
                const lng = e.latlng.lng.toFixed(5)

                if (!this.marker) {
                    this.marker = L.marker([lat, lng]).addTo(this.map)
                } else {
                    this.marker.setLatLng([lat, lng])
                }

                this.marker
                    .bindPopup(`📍 Location:<br><b>Lat:</b> ${lat}<br><b>Lng:</b> ${lng}`)
                    .openPopup()
            })
        },
    },
}
</script>

<style scoped>
.map-box {
    width: 100%;
    max-width: 100%;
    margin: 20px auto;
    /* border: 2px solid #4caf50; */
    /* border-radius: 12px; */
    /* padding: 16px; */
    background: #f9f9f9;
}

.map-box h3 {
    /* margin-bottom: 12px; */
    font-weight: bold;
    color: #333;
}

.map-container {
    height: 400px;
    width: 100%;
    /* border: 1px solid #ccc; */
    /* border-radius: 8px; */
}

@media (max-width: 768px) {
    .map-box {
        padding: 0;
        border: none;
        border-radius: 0;
    }

    .map-container {
        height: 80vh;
        border-radius: 0;
    }
}
</style>
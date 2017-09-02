/*global navigator*/
var locationText = document.getElementById("location-text");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        locationText.innerHTML = "Geolocation is not supported by this browser. Try unblocking location tracking.";
    }
}

function showPosition(position) {
    locationText.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
/*global navigator*/
/*global position*/

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
    
    var weatherUrlText = document.getElementById("weather-url-text");
    weatherUrlText.innerHTML = "https://fcc-weather-api.glitch.me/api/current?lon=:"+ position.coords.longitude + "&lat=:" + position.coords.latitude;

}

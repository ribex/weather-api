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
    var positionObj = {
        "lat": position.coords.latitude,
        "lon": position.coords.longitude
    };


    locationText.innerHTML = "Latitude: " + positionObj.lat + 
    "<br>Longitude: " + positionObj.lat;
    
    var weatherUrlText = document.getElementById("weather-url-text");
    weatherUrlText.innerHTML = "https://fcc-weather-api.glitch.me/api/current?lon=:"+ positionObj.lon + "&lat=:" + positionObj.lat;

}

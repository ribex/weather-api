/*global navigator*/

//https://www.w3schools.com/html/html5_geolocation.asp

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        locationText.innerHTML = "Geolocation is not supported by this browser. Try unblocking location tracking.";
    }
    
    var positionObj = {
    "lat": position.coords.latitude,
    "lon": position.coords.longitude
    };
    
    return positionObj;
}



function loadJavaScript() {
    var request = new XMLHttpRequest();
    request.open("GET", weatherUrlText);
    
    request.addEventListener("load", reqListener);
    console.log("result: " + result);
    var result = request.send();
}

function reqListener() {
    var result = this.responseText;
    var jsonResult = JSON.parse(result);
    var weather = jsonResult.value;
    console.log(weather);
    document.getElementById('city').innerHTML = weather;
}


var locationText = document.getElementById("location-text");

console.log("getLocation");



console.log("showPosition");
function showPosition(position) {

    var positionObj = {
    "lat": position.coords.latitude,
    "lon": position.coords.longitude
    };


    locationText.innerHTML = "Latitude: " + positionObj.lat + 
    "<br>Longitude: " + positionObj.lon;
    
    var weatherUrlText = document.getElementById("weather-url-text");
    weatherUrlText.innerHTML = "https://fcc-weather-api.glitch.me/api/current?lon=:"+ positionObj.lon + "&lat=:" + positionObj.lat;



}


var weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lon=:"+ getLocation().lon + "&lat=:" + getLocation().lat;



console.log("reqListener");


const API_KEY = "64200a5e19438db74c3ddbde02ad49bf";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#geolocation span:first-child");
            const city = document.querySelector("#geolocation span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
       });
}

function onGeoError(){
    alert("Please update location.")
};
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
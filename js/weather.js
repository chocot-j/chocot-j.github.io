const API_KEY = "883b94f61e121289ccaf573159f9b231";
const iconIds = ["#clear", "#cloud", "#rain", "#drizzle", "#thunder", "#snow", "#smog"];
const CLASSNAME_HIDDEN = "hidden";

function addHiddenClass(iconId) {
    const icon = document.querySelector(iconId);
    if (icon.classList.contains(CLASSNAME_HIDDEN) === false) {
        icon.classList.add(CLASSNAME_HIDDEN);
    }
}

function displayIcon(weatherMain) {
    iconIds.forEach(addHiddenClass);
    if (weatherMain === "Clear") {
        document.querySelector(iconIds[0]).classList.remove(CLASSNAME_HIDDEN);
    } else if (weatherMain === "Clouds") {
        document.querySelector(iconIds[1]).classList.remove(CLASSNAME_HIDDEN);
    } else if (weatherMain === "Rain") {
        document.querySelector(iconIds[2]).classList.remove(CLASSNAME_HIDDEN);
    } else if (weatherMain === "Drizzle") {
        document.querySelector(iconIds[3]).classList.remove(CLASSNAME_HIDDEN);
    } else if (weatherMain === "Thunderstorm") {
        document.querySelector(iconIds[4]).classList.remove(CLASSNAME_HIDDEN);
    } else if (weatherMain === "Snow") {
        document.querySelector(iconIds[5]).classList.remove(CLASSNAME_HIDDEN);
    } else {
        document.querySelector(iconIds[6]).classList.remove(CLASSNAME_HIDDEN);
    }
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatehrForm = document.querySelector("#weather");
            const weatherMain = data.weather[0].main;
            const weatherDetail = data.weather[0].description;
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const city = data.name;

            displayIcon(weatherMain);
            weatehrForm.querySelector("h2").innerText = city;
            weatehrForm.querySelector("#weatherInfo").innerText = `${weatherMain}: ${weatherDetail}`;
            weatehrForm.querySelector("#temp").innerText = `${temp} ℃`;
            weatehrForm.querySelector("#humid").innerText = `${humidity} %`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
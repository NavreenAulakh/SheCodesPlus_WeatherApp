//⏰Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let hour = now.getHours();

function addZero(min) {
  if (min < 10) {
    min = "0" + min;
  }
  return min;
}

let minute = addZero(now.getMinutes());

let time = `${day}, ${hour}:${minute}`;

let headerDate = document.querySelector("#date");
headerDate.innerHTML = `${time}`;

//🕵️‍♀️Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function searchForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = `${cityInput.value}`;
}

let searchBar = document.querySelector("#city-search");
searchBar.addEventListener("submit", searchForCity);

// find new city

function searchForCitys() {
  function findCityTemp() {
    let cityName = "Paris";
    let apiId = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiId}`;
    console.log(cityName);

    {
      axios.get(apiUrl).then(findCityTemp);
    }
  }
}

let newCityButton = document.querySelector("#new-location");
newCityButton.addEventListener("click", searchForCitys);

//🙀Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

let celsiusLink = document.querySelector(".celsius");

function switchToF(event) {
  event.preventDefault();
  mainTemp.innerHTML = mainTemp * 1.13;
}
let farenheitLink = document.querySelector(".farenheit");
farenheitLink.addEventListener("click", switchToF);

function switchToC(event) {
  event.preventDefault();
  mainTemp.innerHTML = "23°";
}
let celsiusClick = document.querySelector(".celsius");
celsiusClick.addEventListener("click", switchToC);

// Get Current Location Temp

function showMyLocationAndWeather() {
  function showCurrentLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let unit = "metric";
    let appId = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=${unit}`;

    function displayTemp(response) {
      let currentTemperature = Math.round(response.data.main.temp);
      let mainTemp = document.querySelector("#current-temp");
      mainTemp.innerHTML = currentTemperature;
    }
    axios.get(apiUrl).then(displayTemp);
  }
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", showMyLocationAndWeather);

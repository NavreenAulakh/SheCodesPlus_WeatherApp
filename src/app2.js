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

// Search for city and find the temperature and conditions

function searchForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  cityName = `${cityInput.value}`;
  let unit = "metric";

  let apiKey = "34ae1065362d42545661451bda2b8a1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
  {
    function showCityAndWeatherInfo(response) {
      let cityDisplay = document.querySelector("#city-display");
      cityDisplay.innerHTML = response.data.name;
      let cityTemp = document.querySelector("#current-temp");
      let cityCurrentTemp = Math.round(response.data.main.temp);
      cityTemp.innerHTML = cityCurrentTemp;
      let cityWind = document.querySelector("#wind");
      cityWind.innerHTML = Math.round(response.data.wind.speed);
      let cityHumidity = document.querySelector("#humidity");
      cityWind.innerHTML = Math.round(response.data.main.humidity);
    }
    axios.get(apiUrl).then(showCityAndWeatherInfo);
  }
}
let searchBar = document.querySelector("#city-search");
searchBar.addEventListener("submit", searchForCity);

function showCurrentCityDetails() {
  function showCurrentLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let unit = "metric";
    let appId = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=${unit}`;

    function displayCityAndConditions(response) {
      let currentTemperature = Math.round(response.data.main.temp);
      let mainTemp = document.querySelector("#current-temp");
      mainTemp.innerHTML = currentTemperature;
      let myCurrentCity = document.querySelector("#city-display");
      myCurrentCity.innerHTML = response.data.name;
      let humidity = document.querySelector("#humidity");
      humidity.innerHTML = Math.round(response.data.main.humidity);
      let wind = document.querySelector("#wind");
      wind.innerHTML = Math.round(response.data.wind.speed);
    }
    axios.get(apiUrl).then(displayCityAndConditions);
  }
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", showCurrentCityDetails);

// convert temp to C/F

let celsiusLink = document.querySelector(".celsius");

function switchToF(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#current-temp");
  temperature = tempElement.innerHTML;
  tempElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
let farenheitLink = document.querySelector(".farenheit");
farenheitLink.addEventListener("click", switchToF);

function switchToC(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#current-temp");
  temperature = tempElement.innerHTML;
  tempElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}

let celsiusClick = document.querySelector(".celsius");
celsiusClick.addEventListener("click", switchToC);

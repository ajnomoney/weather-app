let now = new Date();

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dateTime = document.querySelector("#date");

let hours = now.getHours();

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

dateTime.innerHTML = `${day} ${hours}:${minutes}`;

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function getCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

function submitButton(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  getCity(city);
}

function temp(event) {
  event.preventDefault();

  let apiKey = "cc6de5f7f093127192b8eb7fc621758e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let cityInput = document.querySelector("#city-search");

  let citySelector = document.querySelector("#city");
  if (cityInput.value) {
    citySelector.innerHTML = `${cityInput.value}`;
  } else {
    citySelector.innerHTML = null;
    alert("Please type a city...");
  }

  axios.get(apiUrl).then(showWeather);
}

let weatherInput = document.querySelector("#search-form");
weatherInput.addEventListener("submit", temp);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submitButton);

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const forecastContainer = document.getElementById("forecastContainer");
const localWeatherEl = document.getElementById("localWeather");

// Replace with your own API key from OpenWeatherMap
const API_KEY = "bc81fec1f0763f9a21f608d0b1e16c83";

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      cityNameEl.textContent = data.name;
      tempEl.textContent = `Temperature: ${data.main.temp} °C`;
      conditionEl.textContent = `Condition: ${data.weather[0].description}`;
      humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
      windEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    });

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      forecastContainer.innerHTML = "";
      for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        const div = document.createElement("div");
        div.classList.add("forecast-day");
        div.innerHTML = `
          <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
          <p>${day.main.temp} °C</p>
          <p>${day.weather[0].description}</p>
        `;
        forecastContainer.appendChild(div);
      }
    });
}

// 🌍 Extra Feature: Show local weather using geolocation
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      localWeatherEl.textContent = `Your Location: ${data.name}, ${data.main.temp} °C, ${data.weather[0].description}`;
    });
});

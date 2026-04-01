const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");
const forecastContainer = document.getElementById("forecastContainer");
const localWeatherEl = document.getElementById("localWeather");
const toggleUnitBtn = document.getElementById("toggleUnit");

let isCelsius = true;
const API_KEY = "bc81fec1f0763f9a21f608d0b1e16c83"; // Replace with your OpenWeatherMap API key

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
    fetchForecast(city);
  }
});

function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        cityNameEl.textContent = "Error: " + data.message;
        return;
      }
      cityNameEl.textContent = data.name;
      tempEl.textContent = `Temperature: ${data.main.temp} °C`;
      conditionEl.textContent = `Condition: ${data.weather[0].description}`;
      humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
      windEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      sunriseEl.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
      // ✅ Fixed missing closing parenthesis here
      sunsetEl.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
    })
    .catch(err => {
      cityNameEl.textContent = "Network error";
      console.error(err);
    });
}

function fetchForecast(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== "200") {
        forecastContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        return;
      }
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
    })
    .catch(err => {
      forecastContainer.innerHTML = "<p>Network error</p>";
      console.error(err);
    });
}

// 🌍 Extra Feature: Show local weather using geolocation
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        localWeatherEl.textContent = "Error: " + data.message;
        return;
      }
      localWeatherEl.textContent = `Your Location: ${data.name}, ${data.main.temp} °C, ${data.weather[0].description}`;
    })
    .catch(err => {
      localWeatherEl.textContent = "Network error";
      console.error(err);
    });
});

// 🌡️ Extra Feature: Toggle °C / °F
toggleUnitBtn.addEventListener("click", () => {
  isCelsius = !isCelsius;
  const unit = isCelsius ? "metric" : "imperial";
  const city = cityNameEl.textContent;
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod !== 200) {
          tempEl.textContent = "Error: " + data.message;
          return;
        }
        tempEl.textContent = `Temperature: ${data.main.temp} ${isCelsius ? "°C" : "°F"}`;
      })
      .catch(err => {
        tempEl.textContent = "Network error";
        console.error(err);
      });
  }
});

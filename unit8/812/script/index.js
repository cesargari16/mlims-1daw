function main() {
  let lat;  
  let lon;
  let API_key;
  
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&mode=xml`;

  fetch(currentWeatherUrl)
     .then(response => response.text())
     .then(function (result) {
        console.log(result)      
     });
}

document.addEventListener('DOMContentLoaded', main);

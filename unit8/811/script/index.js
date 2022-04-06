function main() {
  let lat;  
  let lon;
  let API_key;

  lat = 38.9194;
  lon = -0.122678;
  API_key = '9320fbe5df378979114c234e59ff4dd2';



  
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=38.9197&lon=-0.1194&appid=9320fbe5df378979114c234e59ff4dd2&units=metric&weather=weather.main`;

  fetch(currentWeatherUrl)
     .then(response => response.text())
     .then(function (result) {
        console.log(result)
        
        result = JSON.parse(result);

        let divData = document.querySelector('#data')

        let p = document.contentElement('p');
        p.innerHTML = "Degrees:" +result.main.temp+ "ºC"
        divData.append(p);
     });
}

document.addEventListener('DOMContentLoaded', main);



const btn = document.querySelector(".search-btn");
const inp = document.getElementById("weather_inp")
const wdata = document.querySelector(".wdata")
const loc_btn = document.querySelector('.location_btn')
const forcast = document.querySelector(".forcast")
const api_key = `27eb7d60a861c28ca6c16561d382b115`;

async function checkweather(city) {
  let cityname = inp.value.trim();
  inp.value = "";
  if (!cityname) return;

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error("City not found or some other error occurred");
      }
      const data = await response.json();
      console.log(data);

      // Here you can process the data, e.g., display weather info on the page
      // For example:
      // displayWeatherData(data);
  

        wdata.innerHTML = `
            <h4>Now</h4>

            <div class="temp-cloc">
                <div class="weather-data">
                   <h2>${Math.floor(data.main.temp - 273.15)}°C</h2>
    
                 </div>
                <div class="weather-img">
                   <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                    <h6>${data.weather[0].description}</h3>
                </div>

            </div>
            <div class="current-time">
                 
                <h3><i class="fa-solid fa-location-dot"></i>  ${data.name}</h3>
            </div>
           
        </div>`

        // forcast.innerHTML = `
        //         <div class="day1">
        //             <h3>___days</h3>

        //             <div class="condition-icon">

        //                 <div class="icon">
        //                      <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  
        //                     <h4>${Math.floor(data.main.temp - 273.15)}°C</h4>
        //                 </div>
        //                 <div class="condition">
        //                     <h4>${data.weather[0].description}</h4>
        //                     <h4>${data.main.humidity}</h4>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="day1">
        //             <h3>___days</h3>
        //         </div>
        //         <div class="day1">
        //             <h3>___days</h3>
        //         </div>
        //         <div class="day1">
        //             <h3>___days</h3>
        //         </div>
        //         <div class="day1">
        //             <h3>___days</h3>
        //         </div>
        //         <div class="day1">
        //             <h3>___days</h3>
        //         </div>
        //         <div class="day1">
        //             <h3>___days</h3>
        //         </div>
          
        // `
      } catch (error) {
        console.error("Error fetching weather data:", error);
        // Optionally, you can display an error message to the user
    }
  }


btn.addEventListener("click",  ()=>{
   checkweather(inp.value)
})

inp.addEventListener('keydown',(e) =>{
     if(e.key === 'Enter'){
        checkweather(inp.value)
     }
})


async function getlocation(lat, lon) {
  const api_key = `27eb7d60a861c28ca6c16561d382b115`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      console.log(data);
       inp.value = data.name;
      checkweather(inp.value)
      
      // You can process the data here, for example, display it on the page

  } catch (error) {
      console.error("Error fetching weather data:", error);
  }
}




function successCallback(position) {
  // console.log(position);
  
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // console.log("Latitude: " + latitude);
  // console.log("Longitude: " + longitude);
  getlocation(latitude,longitude);
}


const geterror = function(){
  console.log("some error");
  
}

loc_btn.addEventListener("click", ()=> {
  navigator.geolocation.getCurrentPosition(successCallback , geterror)
})


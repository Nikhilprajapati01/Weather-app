

const btn = document.querySelector(".search-btn");
const inp = document.querySelector("#weather_inp")
const wdata = document.querySelector(".wdata")
const loc_btn = document.querySelector('.location_btn')
const forcast = document.querySelector(".forcast")


 async function checkweather (city){

  let cityname = inp.value.trim();
  inp.value = "";
  if(!cityname) return;
  const api_key = `27eb7d60a861c28ca6c16561d382b115`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 await fetch(`${url}`)
  .then((res) =>{
    return res.json()
  })
  .then((data)=>{
    console.log(data);
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
                 
                <h3><i class="fa-solid fa-calendar-days"></i>${data.name}</h3>
            </div>
           
        </div>`

        forcast.innerHTML = `
                <div class="day1">
                    <h3>___days</h3>

                    <div class="condition-icon">

                        <div class="icon">
                             <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  
                            <h4>${Math.floor(data.main.temp - 273.15)}°C</h4>
                        </div>
                        <div class="condition">
                            <h4>${data.weather[0].description}</h4>
                            <h4>${data.main.humidity}</h4>
                        </div>
                    </div>
                </div>
                <div class="day1">
                    <h3>___days</h3>
                </div>
                <div class="day1">
                    <h3>___days</h3>
                </div>
                <div class="day1">
                    <h3>___days</h3>
                </div>
                <div class="day1">
                    <h3>___days</h3>
                </div>
                <div class="day1">
                    <h3>___days</h3>
                </div>
                <div class="day1">
                    <h3>___days</h3>
                </div>
          
        `
  }).catch((err) =>{
    console.log("some error in this ", err);
    
  })
}


btn.addEventListener("click",  ()=>{
   checkweather(inp.value)
})

//  async function getlocation(lat ,lon){
//   const api_key = `27eb7d60a861c28ca6c16561d382b115`;
//     await fetch(`https://api.openweathermap.org/data/2.5/weather?${lat}& ${lon}.99&appid=${api_key}`)
//     .then((res) =>  {return  res.json()})
   
// }





// async function getres (positon){
//    console.log(positon);
//    const result =  await getlocation(positon.coords.lon)
//    console.log(result);
     
// }
// const geterr = function(){
//   console.log("some error");
  
// }

// loc_btn.addEventListener("click", ()=> {
//   navigator.geolocation.getCurrentPosition(getres , geterr)
// })


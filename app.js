

const btn = document.querySelector(".search-btn");
const inp = document.querySelector("#weather")
const wdata = document.querySelector(".wdata")
const loc_btn = document.querySelector('.location_btn')


 async function checkweather (city){
  const api_key = `27eb7d60a861c28ca6c16561d382b115`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 await fetch(`${url}`)
  .then((res) =>{
    return res.json()
  })
  .then((data)=>{
    console.log(data);
        wdata.innerHTML = `<div class="weather-img">
                
            </div>
            <div class="weather-data">
               <h2>temprature: ${Math.floor(data.main.temp - 273.15)}°C</h2>
               <h2>wind:${data.wind.speed}kmphs</h2>
                <h2>Humidity:${data.main.humidity}%</h2>`
  })
}


btn.addEventListener("click",  ()=>{
   checkweather(inp.value)
})

//  async function getlocation(lat ,long){
//   const api_key = `27eb7d60a861c28ca6c16561d382b115`;
//     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lat},${long}&appid=${api_key}`)
//     .then((res) =>  {return  res.json()})
//     .then((data) => {
//       console.log(data);
       
//     })
// }





// async function getres (positon){
//    console.log(positon);
//    const result =  await getlocation(positon.coords.latitude)
//    console.log(result);
     
// }
// const geterr = function(){
//   console.log("some error");
  
// }

// loc_btn.addEventListener("click", ()=> {
//   navigator.geolocation.getCurrentPosition(getres , geterr)
// })


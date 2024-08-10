const url = "http://api.weatherapi.com/v1/current.json?key=a3c4f08b23834fd3b55174848241008&q=Indias&aqi=yes"
const inp = document.querySelector(".weather")
const search_btn = document.querySelector(".search-btn")
const wdata = document.querySelector(".weather-data")


const  getdata =  async function () {
   await fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
      wdata.innerHTML  = `              
         <h5>Temprature_c: ${data.current.temp_c}</h5>
         <h5>wind_kph: ${data.current.wind_kph}</h5>
         <h5>Humidity: ${data.current.humidity}</h4>
       
         `

         document.querySelector(".weather-img").innerHTML = `
         <img src= ${ '//cdn.weatherapi.com/weather/64x64/night/353.png'} alt="">
         <h4>${data.current.condition.text}</h4>
         `
  })
  
}

search_btn.addEventListener("click", getdata)
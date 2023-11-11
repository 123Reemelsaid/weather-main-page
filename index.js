const apikey ="7be401a8e4031970cc2707e6887986e9";
const weatherdataEl =document.getElementById("weather-data");
const cityinputEl = document.getElementById("city-input");
const formEl =document.querySelector("form");
formEl.addEventListener("submit",(event)=>{
event.preventDefault();
const cityvalue=cityinputEl.value;
});


async function getweatherdata(cityvalue){
try {
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather? q=${cityvalue}&appid=${apikey}
    &units=metric`)

if(!response.ok){
throw new Error("Network response was not ok")

}
const data=await response.json();

const temperature=Math.round(data.main.temp)
const description=data.weather[0].description
const icon=data.weather[0].icon
const details=[
    `feels like:${Math.round(data.main.feels_like)}`,
    `Humidity:${data.main.humidity}%`,
    `wind speed:${data.wind.speed}m/s`
]
weatherdataEl.querySelector(".icon").innerHTML =`<img src="http://openweathermap.org/img/wn/${icon}.png"
 alt="Weather Icon" >`

weatherdataEl.querySelector(".temperature").textContent=`${temperature}°C`;

weatherdataEl.querySelector(".description").textContent=description;

weatherdataEl.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`).join("");


} catch (error) {  weatherdataEl.querySelector(".icon").innerHTML =`<img src="http://openweathermap.org/img/wn/${icon}.png"
alt="Weather Icon" >`

weatherdataEl.querySelector(".temperature").textContent="";

weatherdataEl.querySelector(".description").textContent="An Error happend , please try again later";

weatherdataEl.querySelector(".details").innerHTML="";

}
}














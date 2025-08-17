let searchBtn = document.getElementById("search")
let cityInput = document.querySelector("input")
let cityName = document.querySelector(".display h1")
let temp = document.querySelector(".display h2")
let desc = document.querySelector(".display p")
let icon = document.querySelector(".display img")

const apiKey = "bde3de559a54b240b322f904af88460a";

function getWeather(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    return fetch(url)
    .then(response=> response.json());
}

searchBtn.addEventListener("click",function(){
    let city = cityInput.value;
    if(city==="")
        return;

    getWeather(city).then(data=>{
        if(data.cod === "404"){
            cityName.textContent = "City Not Found!"
            temp.textContent = ""
            desc.textConten = ""
            icon.src = ""
        } else{
            cityName.textContent = data.name 
            temp.textContent = `Temp: ${data.main.temp} Celsius`
            desc.textContent = data.weather[0].description
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }
    })
})

let URL = "https://api.openweathermap.org/data/2.5/weather";
const select = document.querySelector("form select");
const searchBtn = document.querySelector("form button");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const msg = document.querySelector(".msg");
const maxMin = document.querySelector(".max_min");
const windSpeed = document.querySelector(".wind_speed");
const pressure = document.querySelector(".pressure");



for(const cityName of cityNames){
    let newCity = document.createElement("option");
    newCity.innerText = cityName;
    if(cityName == "Kolkata"){
        newCity.selected = "select";
    }
    select.append(newCity);
};



searchBtn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    getWeather();
});


let getWeather = async () => {
    cName = select.value;
    console.log(cName);
    city.innerText = cName;
    const newUrl = `${URL}?q=${cName}&appid=395ad5e8a46dd0e2020731d792c0dabc&units=metric`;
    const response = await fetch(newUrl);
    const data = await response.json();
    temp.innerText = data.main.temp;
    humidity.innerText = `humidity: ${data.main.humidity}%`;
    msg.innerText = `Feels like: ${data.main.feels_like}`;
    maxMin.innerText = `max/min : ${data.main.temp_max}/${data.main.temp_min}`;
    windSpeed.innerText = `wind : ${data.wind.speed} kmph`;
    pressure.innerText = `pressure ${(data.main.pressure)/10}kPa`;
};

window.addEventListener("load", () =>{
    getWeather();
});

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
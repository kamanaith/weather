const cityName = document.querySelector(".cityName");

const searchBtn = document.querySelector(".searchicon");

const Temperature = document.querySelector(".tempheader");

const Humidity = document.querySelector(".humidheader");

const Latitude = document.querySelector(".latitheader");

const Longitude = document.querySelector(".longiheader");

const Wind = document.querySelector(".windheader");

// const Time = document.querySelector(".time");

const City = document.querySelector(".City");

console.log("city is here");

function renderData(city){
    
async function randomfunc() {
    try {
       
        const Response =await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=93Y5PBPC3H2UWBWWP433VGUZ8`)
        const data = await Response.json();
        console.log(data);

        City.textContent = city;
        Temperature.textContent = data.currentConditions.temp;
        Humidity.textContent = data.currentConditions.humidity;
        // time.textContent = data.Time;
       Wind.textContent = data.currentConditions.windspeed;
       Latitude.textContent = data.latitude;
        Longitude.textContent = data.longitude;

    } catch (error) {
        console.log(error);
    }
}
randomfunc();
}

// console.log(data);

  renderData("itahari");
searchBtn.addEventListener('click' , function() {
    renderData(cityName.value);
});
const input = document.querySelector("#input1");
const output = document.querySelector(".output");

function show() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=75ae967d463146d2b74141847242111&q=${input.value}&aqi=no`)
.then((res) => res.json())
.then((res) => {
    // console.log(res.current);
    // console.log(res.location);
    output.innerHTML = ""
    output.innerHTML += `
    <hr>
    <img src="${res.current.condition.icon}" alt="Image">
    <h2>${res.location.name}, ${res.location.country}</h2>
    <h3>${res.current.temp_c}°C</h3>
    <h3>Feels Like: ${res.current.feelslike_c}°C</h3>
    <h3>Wind Speed: ${res.current.wind_kph}kph</h3>
    <h3>Humidity: ${res.current.humidity}%</h3>`
    input.value = ""
}) 
.catch((err) => {
    output.innerHTML = "City not Found"
})
}







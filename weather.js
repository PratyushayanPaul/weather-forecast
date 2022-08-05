//Complete the Weather API Backend part using openweathermap api

let text=document.querySelector(".search-box");


let api="c9c4a2632347469321f1e0d0bc732f63";
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getWeather(){
    let city = document.querySelector(".search-box").value;
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`)
    .then(res=>{
        // console.log(res.data[0].lat);
        // console.log(res.data[0].lon);
        secondFunc(res.data[0].lat, res.data[0].lon);
    })
}

function secondFunc(lat,lon){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
    .then(res=>{
        document.querySelector(".city").innerHTML = res.data.name;
        document.querySelector(".date").innerHTML = arr[new Date().getDay()] + " " + new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
        document.querySelector(".temp").innerHTML = (res.data.main.temp-273.15).toFixed(1) + "&#8451";
        document.querySelector(".weather").innerHTML = res.data.weather[0].main;
        document.querySelector(".hi-low").innerHTML = (res.data.main.temp_max-275.15).toFixed(1) + " &#8451; / " + (res.data.main.temp_min-273.15).toFixed(1) + " &#8451";

    })
    .catch(err=>{
        console.log(err);
    })
    
}
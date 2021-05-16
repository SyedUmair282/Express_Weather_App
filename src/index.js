//Get elements
var submit = document.getElementById('submitbtn');
var minimum = document.getElementById('min');
var maximum = document.getElementById('max');
var feels = document.getElementById('feel');
var day = document.getElementById('day');
var date = document.getElementById('date');
var inputs = document.getElementById('form');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var mood = document.getElementById('mood');

let api = "3ae56f54574a6511875cb9e103875c06";

//set dates
var dates = new Date();
switch (dates.getDay()) {
    case 1:
        day.innerText = "Monday";
        break;
    case 2:
        day.innerText = "Tuesday";
        break;
    case 3:
        day.innerText = "Wednesday";
        break;
    case 4:
        day.innerText = "Thursday";
        break;
    case 5:
        day.innerText = "Friday";
        break;
    case 6:
        day.innerText = "Saturday";
        break;
    case 0:
        day.innerText = "Sunday";
        break;

    default:
        day.innerText = "May-day"
        break;
}

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

date.innerText = dates.getDate() + " " + monthNames[dates.getMonth()];





//Search Function
const submitfunc = async() => {

    if (inputs.value === "") {
        city.innerText = "Please Enter City Name";
        minimum.innerText = "";
        maximum.innerText = "";
        feels.innerText = "";
        temp.innerText = "";
        mood.innerHTML = "";


    } else {

        try {

            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputs.value},paksitan&appid=${api}`)
            const arr = await data.json();
            console.log(arr);

            city.innerText = inputs.value + ", " + arr.sys.country;
            minimum.innerText = "MIN: " + Math.floor(arr.main.temp_min - 273.15) + "°C";
            maximum.innerText = "MAX: " + Math.floor(arr.main.temp_max - 273.15) + "°C";
            feels.innerText = "FEELS LIKE: " + Math.floor(arr.main.feels_like - 273.15) + "°C";
            temp.innerText = Math.floor(arr.main.temp - 273.15) + "°C";

            if (arr.weather[0].main === "Clear") {
                mood.value = "<i class='fa fa-sun' style= 'color: #eccc68;'></i>"
                console.log(arr.weather[0].main);
            } else if (arr.weather[0].main === "Clouds") {
                mood.innerHTML = "<i class='fas fa-cloud' style= 'color: #f1f2f6;'></i>"
            } else if (arr.weather[0].main === "Rain") {
                mood.innerHTML = "<i class='fas fa-cloud-rain' style= 'color: #a4b0be;'></i>"
            } else {
                mood.innerHTML = "<i class='fas fa-cloud' style= 'color: #f1f2f6;'></i>"
            }

            inputs.value = "";

        } catch {

            city.innerText = "Please Write Correct City Name";
            minimum.innerText = "";
            maximum.innerText = "";
            feels.innerText = "";
            temp.innerText = "";
            mood.innerHTML = "";


        }


    }

}
submit.addEventListener('click', submitfunc);
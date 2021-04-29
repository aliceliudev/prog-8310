"use strict";
// let _power;
$(document).ready(function() {

    //     _power = document.querySelector(".power");

    //     _power.onclick = powerClick;


    $('#switch_btn').click(function() {
        if ($('body').hasClass('active')) {
            $('body').removeClass('active');
            ($('#switch_btn').addClass('inactive'));
            ($('#switch_btn').removeClass('active'));
            // $('body').attr('class', 'off');
        } else {
            $('body').addClass('active');
            ($('#switch_btn').addClass('active'));
            ($('#switch_btn').removeClass('inactive'));
            // $('#light-bulb').attr('class', 'on');
        }
    });

});

// const powerClick = function() {

//     //Caculate the score and add the "data-up" attribute the the elements that have been clicked.
//     if (!this.hasAttribute('light-up')) {
//         this.setAttribute('light-up', '');

//         changeImage();
//         // _penguinAudio.play();

//     }
// };

// // Function for changing background color.

// function changeImage(div) {
//     document.body.style.backgroundColor = "yellow";

// }



//Clock
const body = document.querySelector(".body");
const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
    const now = new Date;

    //Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //Minutes
    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //Seconds
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);


function getWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Waterloo&appid=2959361a7efa97a4a6f88bf074109176&units=imperial')
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res, 'res');
            console.log(res.name);
            // console.log(res.name);
            // console.log(res.weather[0]);
            // console.log(res.main);
            // console.log(res.wind);
            // const _weather = $('.weather');
            // _weather.innerHTML = res.weather[0];
            $('.weatherReport h4').html(res.name + "'s weather");
            // $(".weather").html(res.weather[0].main);
            $(".temp").html(res.main.temp + "&deg;F");
            $(".wind").html(res.wind.speed + "m/h");
            switch (res.weather[0].main) {
                case "cloudy":

                    break;
                case "Mist":
                    $(".weather").addClass("weather-cloudy");

                    break;
                // case "cloudy":

                //             break;
                // case "cloudy":

                //                 break;

                default:
                    break;
            }
        });
}
getWeather();


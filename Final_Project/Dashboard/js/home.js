// "use strict";
// // let _power;
// $(document).ready(function() {

//     //     _power = document.querySelector(".power");

//     //     _power.onclick = powerClick;


//     $('.cube-switch .switch').click(function() {
//         if ($('.cube-switch').hasClass('active')) {
//             $('.cube-switch').removeClass('active');
//             $('#light-bulb').attr('class', 'off');
//         } else {
//             $('.cube-switch').addClass('active');
//             $('#light-bulb').attr('class', 'on');
//         }
//     });

// });

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


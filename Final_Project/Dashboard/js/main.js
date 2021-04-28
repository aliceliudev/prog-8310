
let status = {
    'door1': 'closed',
    'door2': 'closed',
    'door3': 'closed',
    'door4': 'closed',
    'light': 'off',
    'kitchen': 'off'
};
$(document).ready(function() {

    $(".power").click(function() {
        $("body").toggleClass("active");

    });


    $(".door-switch").click(function() {
        let $this = $(this);

        openDoor($this.data('name'), $this);

    });


    $(".shadow").click(function() {
        $(".top-lock").toggleClass("red");
        $(".bottom-lock").toggleClass("red");

        $("span").toggleClass("visible hidden");
    });

    setInterval(monitor, 200);

});

// var door1IsOpen = true;
// var door2IsOpen = true;
// var door3IsOpen = true;
// var door4IsOpen = true;

// const doorStateArray = [true, true, true, true];

// function openDoor(doorNumber) {
//     const desiredClass = ".door" + doorNumber;
//     console.log("Open", doorNumber);
//     document.querySelector(desiredClass).classList.add("open");
//     document.querySelector(desiredClass).classList.remove("closed");
//     doorStateArray[doorNumber - 1] = true;
//     // closeOtherDoors(doorNumber);
// }

// function closedDoor(parametru1) {
//     const desiredClass = ".door" + parametru1;
//     console.log("Closed", parametru1);
//     document.querySelector(desiredClass).classList.add("closed");
//     document.querySelector(desiredClass).classList.remove("open");
//     doorStateArray[parametru1 - 1] = false;
//     // openOtherDoors(parametru1);
// }

// function toogleDoor(doorNumber) {
//     console.log("Toggled");
//     if (doorStateArray[doorNumber - 1] === true) {
//         // closedDoor(doorNumber);
//         openOtherDoors(doorNumber);
//     }
//     else {
//         // openDoor(doorNumber);
//         closeOtherDoors(doorNumber);
//     }
// }

// function closeOtherDoors(doorNumber) {
//     for (let i = 0; i < doorStateArray.length; i++) {
//         if (doorNumber !== i + 1) {
//             closedDoor(i + 1);
//         } else if (doorNumber === 1 + i) {
//             openDoor(doorNumber);
//         }
//     }
// }

// function openOtherDoors(doorNumber) {
//     closedDoor(doorNumber);
//     for (let i = 0; i < doorStateArray.length; i++) {
//         if (doorNumber !== i + 1) {
//             openDoor(i + 1);
//         }
//     }
// }

function openDoor(id, $btn) {
    console.log('-----------------', id);

    let $door = $('#' + id);

    if ($door.hasClass('open')) {
        status[id] = 'closed';
        $door.removeClass('open');

        $btn.text('Open this door');

        // $('body').attr('class', 'off');
    } else {
        $door.addClass('open');
        status[id] = 'open';

        $btn.text('Close this door');

        // $('#light-bulb').attr('class', 'on');
    }

    if ($light.hasClass('open')) {
        status[id] = 'closed';
        $door.removeClass('open');

        $btn.text('Open this door');

        // $('body').attr('class', 'off');
    } else {
        $door.addClass('open');
        status[id] = 'open';

        $btn.text('Close this door');

        // $('#light-bulb').attr('class', 'on');
    }
}

var monitor = function() {

    for (let door in status) {
        $('#status-' + door).text(status[door]);

    }
    $('#status-' + light).text(status[light]);
    $('#status-' + kitchen).text(status[kitchen]);

};














const tempDisplay = document.querySelector("#temp-display");
const tempHandle = document.querySelector("#temp-handle");
const dialCenter = document.querySelector("#dial-center");

const minTemp = 50.0;
const maxTemp = 90.0;
const tempRange = maxTemp - minTemp;

let origin = calculateRotationOrigin();
let rotating = false;

// Find the center of the dial to use as rotation origin.
function calculateRotationOrigin() {
    const { width, height, x, y } = dialCenter.getBoundingClientRect();
    return {
        x: x + width / 2,
        y: y + height / 2
    };
}

function handleMouseDown(event) {
    rotating = true;
}

function handleMouseMove(event) {
    if (rotating) {
        const { clientX, clientY } = event;
        rotate(clientX, clientY);
    }
}

function handleTouchMove(event) {
    if (rotating) {
        event.preventDefault();
        const { touches: { 0: { clientX, clientY } } } = event;
        rotate(clientX, clientY);
    }
}

function handleMouseUp(event) {
    rotating = false;
}

// Calculate the new angle based on the x,y of the Mouse/TouchEvent
function rotate(x, y) {
    const angle = Math.atan2(y - origin.y, x - origin.x);
    const angleDegrees = 180 + angle * 180 / Math.PI;
    updateDial(angleDegrees);
}

// Update dial text and CSS custom properties to display the new state
function updateDial(angle) {
    const percentageOfFullRange = ((360 + (angle - 90)) % 360) / 360;
    const newTemp = (minTemp + tempRange * percentageOfFullRange).toFixed(1);
    const hue = percentageOfFullRange < 0.5 ? 200 : 5;
    const alpha = 40 + 2 * 45 * Math.abs(percentageOfFullRange - 0.5);

    tempDisplay.innerHTML = newTemp;
    document.documentElement.style.setProperty("--temp-rotation", `${angle}deg`);
    document.documentElement.style.setProperty("--temp-hue", hue);
    document.documentElement.style.setProperty("--temp-alpha", `${alpha}%`);
}

tempHandle.addEventListener("mousedown", handleMouseDown);
tempHandle.addEventListener("touchstart", handleMouseDown);

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove, { passive: false });

document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchend", handleMouseUp);

window.addEventListener("resize", () => {
    origin = calculateRotationOrigin();
});




// stove

// const tempDisplay = document.querySelector("#temp-display");
// const tempHandle = document.querySelector("#temp-handle");
// const dialCenter = document.querySelector("#dial-center");

// const minTemp = 38.0;
// const maxTemp = 400.0;
// const tempRange = maxTemp - minTemp;

// let origin = calculateRotationOrigin();
// let rotating = false;

// // Find the center of the dial to use as rotation origin.
// function calculateRotationOrigin() {
//     const { width, height, x, y } = dialCenter.getBoundingClientRect();
//     return {
//         x: x + width / 2,
//         y: y + height / 2
//     };
// }

// function handleMouseDown(event) {
//     rotating = true;
// }

// function handleMouseMove(event) {
//     if (rotating) {
//         const { clientX, clientY } = event;
//         rotate(clientX, clientY);
//     }
// }

// function handleTouchMove(event) {
//     if (rotating) {
//         event.preventDefault();
//         const { touches: { 0: { clientX, clientY } } } = event;
//         rotate(clientX, clientY);
//     }
// }

// function handleMouseUp(event) {
//     rotating = false;
// }

// // Calculate the new angle based on the x,y of the Mouse/TouchEvent
// function rotate(x, y) {
//     const angle = Math.atan2(y - origin.y, x - origin.x);
//     const angleDegrees = 180 + angle * 180 / Math.PI;
//     updateDial(angleDegrees);
// }

// // Update dial text and CSS custom properties to display the new state
// function updateDial(angle) {
//     const percentageOfFullRange = ((360 + (angle - 90)) % 360) / 360;
//     const newTemp = (minTemp + tempRange * percentageOfFullRange).toFixed(1);
//     const hue = percentageOfFullRange < 0.5 ? 200 : 5;
//     const alpha = 40 + 2 * 45 * Math.abs(percentageOfFullRange - 0.5);

//     tempDisplay.innerHTML = newTemp;
//     document.documentElement.style.setProperty("--temp-rotation", `${angle}deg`);
//     document.documentElement.style.setProperty("--temp-hue", hue);
//     document.documentElement.style.setProperty("--temp-alpha", `${alpha}%`);
// }

// tempHandle.addEventListener("mousedown", handleMouseDown);
// tempHandle.addEventListener("touchstart", handleMouseDown);

// document.addEventListener("mousemove", handleMouseMove);
// document.addEventListener("touchmove", handleTouchMove, { passive: false });

// document.addEventListener("mouseup", handleMouseUp);
// document.addEventListener("touchend", handleMouseUp);

// window.addEventListener("resize", () => {
//     origin = calculateRotationOrigin();
// });


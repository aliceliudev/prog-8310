"use strict";


var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var _seconds;
    var _minutes;
    var _hours;
    let _ampm = "AM";
    var _currentDate = new Date();
    _hours = padSingleDigit(_currentDate.getHours());
    _seconds = padSingleDigit(_currentDate.getSeconds());
    _minutes = padSingleDigit(_currentDate.getMinutes());

    if (_hours > 12) {
        _hours = _hours - 12;
        _ampm = "PM";
    }


    $("seconds").innerHTML = _seconds;
    $("minutes").innerHTML = _minutes;
    $("hours").innerHTML = _hours;
    $("ampm").innerHTML = _ampm;
};

var padSingleDigit = function(num) {
    if (num < 10) { return "0" + num; }
    else { return num; }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
};




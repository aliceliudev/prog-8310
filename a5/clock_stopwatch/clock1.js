"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var _startBtn = $("start");
var _restBtn = $("rest");
var _stopBtn = $("stop");


var displayCurrentTime = function() {
    //create a date object and find out if it is AM or PM
    //display the hours, minutes, milliseconds and AM/PM on the webpage
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
/*
var tickStopwatch = function() {
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 1;

    stopwatchTimer = new Date(timeInMilliseconds);

    elapsedMilliseconds = elapsedMilliseconds * 10;

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds == 60) {
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;

    }
    $("s_minutes").innerHTML = elapsedMinutes;
    $("s_seconds").innerHTML = elapsedSeconds;
    $("s_ms").innerHTML = elapsedMilliseconds;

    // if seconds total 60, increment minutes by one and reset seconds to zero

    tickStopwatch();

    //display new stopwatch time

};

*/



// event handler functions
/*var startStopwatch = function(evt) {

    tickStopwatch();
    if (elapsedMilliseconds != 0) {
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }

    setInterval(tickStopwatch, 10);

    // prevent default action of link

    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.



};
*/
/*var stopStopwatch = function(evt) {
    // prevent default action of link

    // stop timer
    clearInterval(stopwatchTimer);
};

var resetStopwatch = function(evt) {
    // prevent default action of link

    // stop timer
    clearInterval(stopwatchTimer);
    // reset elapsed variables and clear stopwatch display



};
*/
window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    // displayCurrentTime();
    //setInterval(displayCurrentTime, 1000);
    //tickStopwatch();
    //setInterval(tickStopwatch, 1000);
    // set up stopwatch event handlers

    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    _stopBtn.click = stopStopwatch;
    _restBtn.click = resetStopwatch;
    _startBtn = startStopwatch;

};
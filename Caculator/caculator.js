let _operators;
let _numbers;
let _display;
let isOperator = false;


window.onload = function() {
    _operators = document.querySelectorAll('.button-op');   //Store all the operators in variable
    _numbers = document.querySelectorAll('.button-num');
    _display = document.querySelector('#output');
    // _display.value = eval("1+1");
    _button = document.querySelector('.button-num');
    _button.onclick = buttonPress;




};

var numbuttonPress = function(event) {
    //console.log(event.target.getAttribute('data-num'));

    _display.value += event.target.getAttribute('data-num');
};

var opButton = function(event) {
    if (isOperator) return;
    else {
        _display.value += event.target.getAttribute('data-op');
    }



};
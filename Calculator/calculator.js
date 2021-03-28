let _operators;
let _numbers;
let _display;
let isOperator = false;
let isNumber = false; /* to allow the log, sin, sqrt, pi, cos, and tan */
let parenthesis;
let _clear;
let _backspace;
let _clearAll;
let _percent;
let _exponent;
let _negate;
let _pi;
let _sciOps; /* This variable is for sqrt, log, pi, sin, cos, and tan.*/

//onload values to each buttons

window.onload = function() {

    /*Store values to the variables*/
    _operators = document.querySelectorAll('.button-op');
    _sciOps = document.querySelectorAll('.button-op1');
    _numbers = document.querySelectorAll('.button-num');
    parenthesis = document.querySelectorAll(".button-num1");
    _display = document.querySelector('#output');
    _eval = document.querySelector('#eval');
    _clear = document.querySelector('#clear');
    _backspace = document.querySelector('#back');
    _clearAll = document.querySelector('#clearAll');
    _exponent = document.querySelector('#exponent');
    _pi = document.querySelector('#π');
    _negate = document.querySelector('#negate');

    // The functions for onClick 

    _operators.forEach(function(_operator) {
        _operator.onclick = operatorClick;
    });

    _sciOps.forEach(function(_sciOp) {
        _sciOp.onclick = sciOpClick;

    });

    _numbers.forEach(function(_number) {
        _number.onclick = numberClick;

    });

    _eval.onclick = evaluateClick;
    _clear.onclick = clearClick;
    _clearAll.onclick = clearClick;
    _backspace.onclick = backClick;
    _pi.onclick = PiClick;
    _exponent.onclick = exponentClick;
    _negate.onclick = negateClick;

};

// function for operators

var operatorClick = function(event) {
    //console.log(event.target.getAttribute('data-num'));

    const operator = event.target.getAttribute('data-op');

    if (!isOperator) {
        _display.value += operator;
    }
    isOperator = true;

};

//function for the scientific operators

var sciOpClick = function(event) {
    const sciOp = event.target.getAttribute('id');
    if (isNumber == false || isOperator == true) {
        //console.log(sciOperator);

        _display.value += sciOp;

        isOperator = false;
        isNumber = false;
    }
};


//function for Pi

var PiClick = function() {

    if (_display.value.charAt(0) == "" && isNumber == false) {

        _display.value = "π";
        isNumber = true;
        isOperator = false;
    }
    else if (isNaN(_display.value) == false) {
        _display.value = _display.value + "*" + "π";
        isOperator = false;
        isNumber = false;

    }

    else {
        _display.value = _display.value + "π";
        isOperator = false;
        isNumber = false;

    }

};


// function for numbers
var numberClick = function(event) {
    //console.log(event.target.getAttribute('data-op'));
    _display.value += event.target.getAttribute('data-num');
    isOperator = false;
    isNumber = true;
};


// function for buttons
var opButton = function(event) {
    if (isOperator) return;
    else {
        _display.value += event.target.getAttribute('data-op');
        isOperator = false;
        isNumber = false;
    }

};

// function for eval


var evaluateClick = function() {
    let evalString = _display.value.replaceAll("^", "**");
    evalString = evalString.replaceAll("%", "*(1/100)");
    evalString = evalString.replaceAll("√(", "Math.sqrt(");
    evalString = evalString.replaceAll("sin(", "Math.sin(");
    console.log(evalString);
    evalString = evalString.replaceAll("cos(", "Math.cos(");
    evalString = evalString.replaceAll("tan(", "Math.tan(");
    evalString = evalString.replaceAll("log(", "Math.log(");
    evalString = evalString.replaceAll("π", "3.14159265");
    _display.value = eval(evalString);

};

//function for clear button

var clearClick = function() {
    _display.value = "";
    isOperator = false;
    isParenthesis = true;
    isNumber = false;

};

//function for the backspace button

var backClick = function() {
    _display.value = _display.value.slice(0, -1);
    isNumber = false;
    isOperator = true;


};

//function for the ^ button

var exponentClick = function() {
    _display.value += "^";
};

//function for the negate button

var negateClick = function() {
    if (_display.value.charAt(0) == "-") {
        _display.value = _display.value.slice(1);
    } else {
        _display.value = "-" + _display.value;
    }
};

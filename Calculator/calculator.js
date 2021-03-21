let _operators;
let _numbers;
let _display;
let isOperator = false;
let isParenthesis = true;
let parenthesis;
let _clear;
let _backspace;
let _clearAll;
let _percent;
let _log;
let _exponent;
let _sqrt;
let _negate;
let _pi;
let _sin;
let _cos;
let _tan;
//onload to feach buttons

window.onload = function() {
    _operators = document.querySelectorAll('.button-op');   //Store all the operators in variable
    _numbers = document.querySelectorAll('.button-num');
    parenthesis = document.querySelectorAll(".button-num1");
    _display = document.querySelector('#output');
    // _display.value = eval("1+1");
    _eval = document.querySelector('#eval');

    _clear = document.querySelector('#clear');

    _backspace = document.querySelector('#back');

    _clearAll = document.querySelector('#clearAll');

    _percent = document.querySelector('#percent');

    _log = document.querySelector('#log');

    _exponent = document.querySelector('#exponent');

    _sqrt = document.querySelector('#sqrt');

    _negate = document.querySelector('#negate');

    _pi = document.querySelector('#pi');
    _sin = document.querySelector('#sin');
    _cos = document.querySelector('#cos');
    _tan = document.querySelector('#tan');

    _operators.forEach(function(_operator) {
        //console.log(_operator);
        _operator.onclick = operatorClick;
    });


    _numbers.forEach(function(_number) {

        _number.onclick = numberClick;

    });

    parenthesis.forEach(function(parenthesis1) {
        parenthesis1.onclick = calParenthesis;
    });

    _eval.onclick = evaluateClick;
    _clear.onclick = clearClick;

    _clearAll.onclick = clearClick;

    _backspace.onclick = backClick;

    _percent.onclick = percentClick;

    _log.onclick = logClick;
    _exponent.onclick = exponentClick;
    _sqrt.onclick = sqrtClick;
    _negate.onclick = negateClick;
    _pi.onclick = PiClick;
    _sin.onclick = sinClick;
    _cos.onclick = cosClick;
    _tan.onclick = tanClick;


};

// function for operators
var operatorClick = function(event) {
    //console.log(event.target.getAttribute('data-num'));

    const operator = event.target.getAttribute('data-op');

    if (!isOperator) {
        _display.value += operator;
    }
    isOperator = true;
    isParenthesis = true;
};
// function for numbers
var numberClick = function(event) {
    //console.log(event.target.getAttribute('data-op'));
    _display.value += event.target.getAttribute('data-num');
    isOperator = false;
    isParenthesis = true;
};

var calParenthesis = function(event) {
    if (isParenthesis == true) {
        _display.value += event.target.getAttribute('data-par');
        isParenthesis = false;
        isOperator = false;
    }
};

// function for buttons
var opButton = function(event) {
    if (isOperator) return;
    else {
        _display.value += event.target.getAttribute('data-op');
    }

};

// function for eval
/*var evaluateClick = function() {

    if ((_display.value).indexOf("^") > -1) {
        var base = (_display.value).slice(0, (_display.value).indexOf("^"));
        var exponent = (_display.value).slice((_display.value).indexOf("^") + 1);
        _display.value = eval("Math.pow(" + base + "," + exponent + ")");

    } else {
        _display.value = eval(_display.value);
    }
}; */

var evaluateClick = function() {
    const evalString = _display.value.replace("^", "**");
    _display.value = eval(evalString);
};


//function for clear button
var clearClick = function() {
    _display.value = "";
};


var backClick = function() {
    //_display.value = _display.value.substring(0, _display.value.length - 1);
    //isOperator = false;
    // var backValue = _display.value;
    //backValue = backValue.split("");
    // backValue.pop();
    //console.log(backValue.pop());

    // backValue.pop();
    //backValue = backValue.slice(0, -1);
    // _display.value = backValue.toString();
    _display.value = _display.value.slice(0, -1);


};

var percentClick = function() {


    _display.value = _display.value / 100;

    isOperator = false;

};


var logClick = function() {
    _display.value = Math.log10(_display.value);
};


var exponentClick = function() {
    _display.value += "^";
};

var sqrtClick = function() {
    _display.value = Math.sqrt(_display.value);
};


var negateClick = function() {
    if (_display.value.charAt(0) == "-") {
        _display.value = _display.value.slice(1);
    } else {
        _display.value = "-" + _display.value;
    }
};


var PiClick = function() {
    // _display.value += target.getAttribute('button-pi');
    isOperator = false;

    _display.value = (_display.value * Math.PI.toFixed(8));

};
var sinClick = function() {
    _display.value = Math.sin(_display.value);
};
var cosClick = function() {
    _display.value = Math.cos(_display.value);
};
var tanClick = function() {
    _display.value = Math.tan(_display.value);

};

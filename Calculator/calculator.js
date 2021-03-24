let _operators;
let _numbers;
let _display;
let isOperator = false;
//let isParenthesis = true;
let isNumber = false; // to allow the log, sin, 
let parenthesis;
let _clear;
let _backspace;
let _clearAll;
let _percent;
let _exponent;
let _negate;
let _pi;
let _sciOps; /* This variable is for sqrt, log, pi, sin, cos, and tan.*/
/*
let _sqrt;
let _log;

let _sin;
let _cos;
let _tan;
*/
//onload to feach buttons

window.onload = function() {
    _operators = document.querySelectorAll('.button-op');   //Store all the operators in variable
    _sciOps = document.querySelectorAll('.button-op1');
    //console.log(_sciOps);
    _numbers = document.querySelectorAll('.button-num');
    parenthesis = document.querySelectorAll(".button-num1");
    _display = document.querySelector('#output');
    // _display.value = eval("1+1");
    _eval = document.querySelector('#eval');

    _clear = document.querySelector('#clear');

    _backspace = document.querySelector('#back');

    _clearAll = document.querySelector('#clearAll');

    //_percent = document.querySelector('#percent');

    _exponent = document.querySelector('#exponent');

    _pi = document.querySelector('#π');
    console.log(_pi);

    _negate = document.querySelector('#negate');

    /*
    _log = document.querySelector('#log')
        _sqrt = document.querySelector('#sqrt');
    
        
        _sin = document.querySelector('#sin');
        _cos = document.querySelector('#cos');
        _tan = document.querySelector('#tan');
    
        */

    _operators.forEach(function(_operator) {
        //console.log(_operator);
        _operator.onclick = operatorClick;
    });


    _sciOps.forEach(function(_sciOp) {
        _sciOp.onclick = sciOpClick;

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



    _pi.onclick = PiClick;
    _exponent.onclick = exponentClick;

    _negate.onclick = negateClick;

    /*
    _percent.onclick = percentClick;
    _log.onclick = logClick;
    _sqrt.onclick = sqrtClick;
  
    _sin.onclick = sinClick;
    _cos.onclick = cosClick;
    _tan.onclick = tanClick;
 */

};

// function for operators
var operatorClick = function(event) {
    //console.log(event.target.getAttribute('data-num'));

    const operator = event.target.getAttribute('data-op');

    if (!isOperator) {
        _display.value += operator;
    }
    isOperator = true;
    //isParenthesis = true;

};

//function for the scientific operators

var sciOpClick = function(event) {
    const sciOp = event.target.getAttribute('id');
    if (isNumber == false) {
        //console.log(sciOperator);

        _display.value += sciOp;

        isOperator = false;
        isNumber = false;
    }
};
var PiClick = function() {
    // _display.value += target.getAttribute('button-pi');
    if (_display.value.charAt(0) == "" && isNumber == false) {

        _display.value = "π";
        isNumber = true;
        isOperator = false;
    }

    else if (isNumber = true) {
        _display.value = _display.value + "*" + "π";
        isOperator = false;
        isNumber = false;

    }



};

// function for numbers
var numberClick = function(event) {
    //console.log(event.target.getAttribute('data-op'));
    _display.value += event.target.getAttribute('data-num');
    isOperator = false;
    // isParenthesis = true;
    isNumber = true;
};

var calParenthesis = function(event) {
    if (isParenthesis == true) {
        _display.value += event.target.getAttribute('data-par');
        //  isParenthesis = false;
        isOperator = false;
        isNumber = true;
    }
};

// function for buttons
var opButton = function(event) {
    if (isOperator) return;
    else {
        _display.value += event.target.getAttribute('data-op');
        isOperator = false;
        //  isParenthesis = true;
        isNumber = false;
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
    let evalString = _display.value.replaceAll("^", "**");
    evalString = evalString.replaceAll("%", "*(1/100)");
    evalString = evalString.replaceAll("√(", "Math.sqrt(");
    evalString = evalString.replaceAll("sin(", "Math.sin(");
    console.log(evalString);
    evalString = evalString.replaceAll("cos(", "Math.cos(");
    evalString = evalString.replaceAll("tan(", "Math.tan(");
    evalString = evalString.replaceAll("log(", "Math.log(");
    evalString = evalString.replaceAll("π", "Math.PI");
    _display.value = eval(evalString);

    //console.log(_display.value);

};
//function for clear button
var clearClick = function() {
    _display.value = "";
    isOperator = false;
    isParenthesis = true;
    isNumber = false;

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
    isNumber = false;
    isOperator = true;


};
/*
var percentClick = function() {


    _display.value = _display.value / 100;

    isOperator = false;

};

*/


var exponentClick = function() {
    _display.value += "^";
};

var negateClick = function() {
    if (_display.value.charAt(0) == "-") {
        _display.value = _display.value.slice(1);
    } else {
        _display.value = "-" + _display.value;
    }
};



/*
var sqrtClick = function() {
    _display.value = Math.sqrt(_display.value);
};
var logClick = function() {
    _display.value = Math.log10(_display.value);
};


var sinClick = function() {
    _display.value = Math.sin(_display.value);
};
var cosClick = function() {
    _display.value = Math.cos(_display.value);
};
var tanClick = function() {
    _display.value = Math.tan(_display.value);

}; */

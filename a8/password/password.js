"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };

    $("#generate").click(function() {
        $("#password").val(""); // clear previous entry

        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let password = "";
        let a = 0;
        let length = $("#num").val();


        if (isNaN(length) || length == "" || num == null) {

            alert("Please enter a valid number");

        }

        else {

            for (a = 0; a < length; a++) {
                password += chars.charAt(getRandomNumber(chars.length));
            }

            $("password").val = password;
        }

    }); // end click()

    $("#clear").click(function() {
        $("#num").val("");
        $("#password").val("");
        $("#num").focus();
    }); // end click()

    // set focus on initial load
    $("#num").focus();
}); // end ready()
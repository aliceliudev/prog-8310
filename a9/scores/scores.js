"use strict";
let scores = [];
let scoreStrings = [];
let averageScore = 0;

$(document).ready(function() {

    var displayScores = function() {

        var sum = 0;
        let scoreString = "";
        for (var a = 0; a < scores.length; a++) {

            scoreString += `${scores[a].lastName}, ${scores[a].firstName} : ${scores[a].score}` + '\n';
            sum += scores[a].score;
        }
        $("#scores").val(scoreString);

        averageScore = (sum / scores.length).toFixed(2);

        //Add score strings to the textarea

        $("#average_score").val(averageScore);



    };

    $("#add_button").click(function() {

        let _firstName = $("#first_name").val();
        let _lastName = $("#last_name").val();
        let _score = $("#score").val();

        // get the add form ready for next entry
        $("#first_name").val("");
        $("#last_name").val("");
        $("#score").val("");
        scores.push({
            firstName: _firstName,
            lastName: _lastName,
            score: Number(_score)
        });

        scoreStrings.push(Number(score));

        $("#first_name").focus();
        displayScores();

    }); // end click()

    $("#clear_button").click(function() {


        // remove the score data from the web page
        $("#average_score").val("");
        $("#scores").val("");
        // scores.length = 0;
        scores = [];

        $("#first_name").focus();
    }); // end click()

    $("#sort_button").click(function() {

        scores.sort(function(a, b) {
            let nameA = a.lastName.toUpperCase();  // ignore upper and lowercase
            let nameB = b.lastName.toUpperCase();   // ignore uppder and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        displayScores();

    }); // end click()

    $("#first_name").focus();
}); // end ready()
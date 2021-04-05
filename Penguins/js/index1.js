let score = 0; highscore = 0;
let _game;
let _penguinAudio;
let _yetiAudio;
//let _startAudio;



let _yeti, _penguins, _score, _current_score, _high_score;

_penguinAudio = new Audio('penguin.mp3');
_yetiAudio = new Audio('yeti.mp3');
const difficulty = {
    easy: 3,
    medium: 4,
    hard: 5
};

/*
const renderGame = function() {

    const _gameHolder = document.querySelector('#gameholder');
    i = 1;
    for (a = 0; a < difficulty.medium; a++) {
        for (b = 0; b < difficulty.medium; b++) {

            const _penguin = document.createElement('div');
            _penguin.setAttribute('class', 'penguin');
            _penguin.setAttribute('id', 'penguin' + i);
            _gameHolder.appendChild(_penguin);
            i++;
        }
    }
    const _yeti1 = document.createElement('div');
    _yeti1.setAttribute('class', 'yeti');
    _yeti1.setAttribute('id', 'yeti');
    _gameHolder.appendChild(_yeti1);
};

*/



$(document).ready(function() {



    //This code will run after your page loads

    _yeti = document.querySelector("#yeti");
    _penguins = document.querySelectorAll(".penguin");
    _current_score = document.querySelector("#current_score");
    _high_score = document.querySelector("#high_score");
    _score = document.querySelector("#score");
    _game = document.querySelector("#game");

    // _startAudio = new Audio('starter.wav');


    //$("#yeti").mousedown(function() {
    //   alert("Yaaaarrrr!");
    // });

    //Jquery event handling

    /* $(".penguin").mousedown(function(){
 
         console.log('penguin clicked with jquery');
 
     });*/

    // JS Event handling

    if (sessionStorage.getItem("highscore")) {
        _high_score.innerHTML = sessionStorage.getItem("highscore");
    } else {
        _high_score.innerHTML = 0;
    }

    _penguins.forEach(function(_penguin) {
        _penguin.onclick = penguinClick;

    });

    _yeti.onclick = yetiClick;




});



const penguinClick = function() {


    /*if (!this.classList.contains('up')) {
        this.classList.add('up');
        clicked
        //onsole.log('penguin click');
        score += 1;
        _current_score.innerHTML = score;
    }
        */


    /*if (!this.classList.contains('up')) {
        this.classList.add('up');
        score += 1;
        _current_score.innerHTML = score;
    } */
    /*if (this.getAttribute('class').indexOf('up') > -1) {
        this.classList.add('up');
        score += 1;
        _current_score.innerHTML = score;
    }
   */

    if (!this.hasAttribute('data-up')) {
        this.setAttribute('data-up', '');


        score += 1;
        _current_score.innerHTML = score;
        console.log(this.id.slice(-1));
        changeImage(this, this.id.slice(-1));
        _penguinAudio.play().playbackRate = 10;
        console.log(_penguinAudio);

    }




};
function changeImage(div, i) {
    div.style.backgroundImage = "url('images/penguin_" + i + ".png')";

}




const yetiClick = function() {

    console.log('yeti click');
    //setTimeout(endGame, 2000);

    let i; j = 1;
    for (i = 0; i < 8; i++) {
        _penguins[i].removeAttribute('data-up');
        _penguins[i].style.backgroundImage = "url('images/mound_" + j + ".png')";
        j++;
    }



    console.log(_penguins);
    if (!sessionStorage.getItem("highscore")) {
        sessionStorage.setItem("highscore", score);
    }
    else {
        (sessionStorage.getItem("highscore") >= score) ? "" : sessionStorage.setItem("highscore", score);


    }
    _high_score.innerHTML = sessionStorage.getItem("highscore");
    /* if (highscore < score) {
            highscore = score;
        } 
    
        _high_score.innerHTML = highscore;
    */

    _yetiAudio.play();
    console.log(_yetiAudio);


    alert('You lose');
    endGame();



};


const endGame = function() {


    /*   if (highscore == 0) {
  
          highscore = score;
  
      }
  */



    // track high score;

    //alert user of their score

    //reset game
    resetGame();

};


const resetGame = function() {


    const yeti_index = Math.round(Math.random() * (_penguins.length - 1));
    console.log(yeti_index);
    _game.insertBefore(_yeti, _game.children[yeti_index]);
    score = 0;
    _current_score.innerHTML = score;



    //shuffle penguin yetti
    // renderGame();

};


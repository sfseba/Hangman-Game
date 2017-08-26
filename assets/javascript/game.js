$(document).ready(function()
{
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var randomWordArr = ['korea', 'america', 'france', 'canada','germany','sweden','switzerland','nederland'];
  var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
  var getHint = ['where I am from', 'where I live now', 'Chanel', 'Maple', 'Sausage', 'Ikea', 'Bank', 'Drug'];
  //var word; // selected letter
  var guess;
  var geusses = [ ];
  //var guessLetters = letters[random]; // Stored guesses
  //var randomGuess = new Array(guessLetters.length)
  var lives = 5;
  var counter = 0;
  var spcace; // number of space for choosen random word
  var wrongList =[];

// get elements
//  var showLives = $('#mylives');
//  var getHint = $('#hint');
//  var showClue = $('#clue');

  // make alphabet buttons
$.each(letters, function(index, value){
  letterBtn = $("<button>");
  letterBtn.addClass("letter-button letter ");
  letterBtn.attr("data-letter", value);
  letterBtn.text(value);
  $("#buttons").append(letterBtn);
});
// guess word = _
// Create geusses ul
  result = function () {
   wordHolder = document.getElementById('hold');
   correct = document.createElement('ul');

   for (var i = 0; i < randomWord.length; i++) {
     correct.setAttribute('id', 'my-word');
     guess = document.createElement('li');
     guess.setAttribute('class', 'guess');
     guess.innerHTML = "_";
     geusses.push(guess);
     wordHolder.appendChild(correct);
     correct.appendChild(guess);
   }
 }
result();

// OnClick Function
   check = function (letter) {


    //  this.setAttribute("class", "active");
    //  this.onclick = null;
var counterTwo = 0;
      for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
          geusses[i].innerHTML = letter;
          counterTwo += 1;
          counter += 1;
        }
      }
      if(counterTwo === 0){
        wrongList.push(letter);
        $('#wrong').append(letter);
        lives -= 1;

      }
      comments();
      /*
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }*/

  }
  comments = function () {
    console.log('here');

    $('#mylives').html("You have " + lives + " lives");
    if (lives < 1) {
      $('#mylives').html("Game Over");
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter === geusses.length) {
        $('#mylives').html("You Win!");
      }
    }
  }


$('.letter-button').on('click', function(){
//fridgeMagnet.addClass('letter fridge-color')
var letter = $(this).attr("data-letter");
console.log(letter);
check(letter);

//$('#display').append(fridgeMagnet);
})
play = function(){

  randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
  //var getHint = ['where I am from', 'where I live now', 'Chanel', 'Maple', 'Sausage', 'Ikea', 'Bank', 'Drug'];
  //var word; // selected letter
  //var guess;
  geusses = [ ];
  //var guessLetters = letters[random]; // Stored guesses
  //var randomGuess = new Array(guessLetters.length)
  lives = 5;
  counter = 0;
  //var spcace; // number of space for choosen random word
  wrongList =[];
  result();

}
document.getElementById('reset').onclick = function() {
  correct.parentNode.removeChild(correct);
  //letters.parentNode.removeChild(letters);
  //showClue.innerHTML = "";
  play();
  $('#wrong').html("Wrong Letters: ");
  $('#mylives').html("You have " + lives + " lives");

}




})

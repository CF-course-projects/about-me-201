'use strict';

let totalScore=0;
let totalQuestions=7;

let user = prompt('What is your name?');

alert('Welcome '+ user + '!');


// Question One

let answerOne = prompt('Do I like to climb?');

function questionOne() {
  if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y'){
    //console.log('Yes I would be an astronaut');
    totalScore=totalScore+1;
    alert('Yes I do like to climb!');
  }
  else if (answerOne.toLowerCase() === 'no' || answerOne.toLowerCase() === 'n'){
    //console.log('Sorry');
    alert('Sorry, but I do like to climb!');
  }
  else {
    //console.log('That is not a correct response, please reply "yes" or "no"');
    alert('That is not a correct response, please reply "yes" or "no"');
  }
}
questionOne();

// Question Two
function questionTwo() {
  let answerTwo = prompt('Have I worked as a wildland firefighter?');
  
  if (answerTwo.toLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y'){
    //console.log('Yes I have worked as a wildland firefighter!');
    totalScore=totalScore+1;
    alert('Yes I have worked as a wildland firefighter!');
  }
  else if (answerTwo.toLowerCase() === 'no' || answerTwo.toLowerCase() === 'n'){
    //console.log('Sorry, but I have worked as a wildland firefighter!');
    alert('Sorry, but I have worked as a wildland firefighter!');
  }
  else {
    //console.log('That is not a correct response, please reply "yes" or "no"');
    alert('That is not a correct response, please reply "yes" or "no"');
  }
}
questionTwo();


// Question Three
function questionThree() {
  let answerThree = prompt('Am I afraid of heights?');
  
  if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y'){
    //console.log('Sorry but I am not afraid of heights.');
    alert('Sorry but I am not afraid of heights.');
  }
  else if (answerThree.toLowerCase() === 'no' || answerThree.toLowerCase() === 'n'){
    //console.log('Correct! I am not afraid of heights.');
    totalScore=totalScore+1
    alert('Correct! I am not afraid of heights.');
  }
  else {
    //console.log('That is not a correct response, please reply "yes" or "no"');
    alert('That is not a correct response, please reply "yes" or "no"');
  }
}
questionThree();



// Question Four
function questionFour() {
  let answerFour = prompt('Can you speak spanish?');
  
  if (answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y'){
    //console.log('Sorry, but I would not consider myself capable of speaking Spanish!');
    alert('Sorry, but I would not consider myself capable of speaking Spanish!');
  }
  else if (answerFour.toLowerCase() === 'no' || answerFour.toLowerCase() === 'n'){
    //console.log('Correct! I cannot speak Spanish. Yet...');
    totalScore=totalScore+1;
    alert('Correct! I cannot speak Spanish. Yet...');
  }
  else {
    //console.log('That is not a correct response, please reply "yes" or "no"');
    alert('That is not a correct response, please reply "yes" or "no"');
  }
}
questionFour();


// Question Five
function questionFive() {
  let answerFive = prompt('Have I ever held a monkey?');
  
  if (answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y'){
    //console.log('Yes, I have held a monkey!');
    totalScore=totalScore+1;
    alert('Yes, I have held a monkey!');
  }
  else if (answerFive.toLowerCase() === 'no' || answerFive.toLowerCase() === 'n'){
    //console.log('No I have not held a monkey');
    alert('Sorry, but I have held a monkey!');
  }
  else {
    //console.log('That is not a correct response, please reply "yes" or "no"');
    alert('That is not a correct response ' + user + ', please reply "yes" or "no".');
  }
}
questionFive();

// STICKY HEADER

//When the user scrolls the page, execute myFunction

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// QUESTION 6

function questionSix() {
  let attempts = 4;
  let correctAnswer = 60;
  
  for (let i=0; i<attempts; i++){
    let questionSix= prompt('Guess a number between 1 and 100');
      if (questionSix == correctAnswer) {
        alert('YOU HAVE GUESSED THE CORRECT ANSWER');
        //console.log (questionSix);
        totalScore=totalScore+1;
        break;
      }
      else if (questionSix > correctAnswer) {
        alert('You have guessed too high, please try again.')
        //console.log (questionSix);
      }
      else if (questionSix < correctAnswer) {
        alert('You have guessed to low, please try again.')
        //console.log (questionSix);
      }
  }
  
  alert(`The correct answer was ${correctAnswer}`)
}
questionSix();

// QUESTION 7


let secondAttempts = 6;
let fellowship = ['gandalf','aragorn','gimli','legolas','frodo','samwise','mary','pippin','boromir'];

console.log(fellowship);

for (let p=0; p<secondAttempts; p++){
  let questionSeven= prompt('Name a character from the original fellowship of the ring (that left Rivendell). ');
    if (fellowship.includes(questionSeven.toLowerCase())) {
      alert('YOU HAVE GUESSED THE CORRECT ANSWER');
      totalScore=totalScore+1;
      break;
    }
    else if (questionSeven != fellowship) {
      alert('That is not the right answer please try again.');
      //console.log(questionSeven);
    }
}

alert(`The correct answer could have been any of the following; ${ fellowship}.`)
alert(`Your total Score was ${totalScore} out of ${totalQuestions}.`)



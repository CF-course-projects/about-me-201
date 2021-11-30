'use strict';

//console.log('hello world')

let user = prompt('What is your name?');

alert('Welcome '+ user + '!');


// Question One

let answerOne = prompt('Would you be an astronaut?');

if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y'){
  //console.log('Yes I would be an astronaut');
  alert('Yes I would be an astronaut');
}
else if (answerOne.toLocaleLowerCase() === 'no' || answerOne.toLowerCase() === 'n'){
  //console.log('No I would not be an astronaut');
  alert('No I would not be an astronaut');
}
else {
  //console.log('That is not a correct response, please reply "yes" or "no"');
  alert('That is not a correct response, please reply "yes" or "no"');
}


// Question Two

let answerTwo = prompt('Do you faint easily?');

if (answerTwo.toLocaleLowerCase() === 'yes' || answerTwo.toLowerCase() === 'y'){
  //console.log('Yes I do faint easily');
  alert('Yes I do faint easily');
}
else if (answerTwo.toLocaleLowerCase() === 'no' || answerTwo.toLowerCase() === 'n'){
  //console.log('No I do not faint easily');
  alert('No I do not faint easily');
}
else {
  //console.log('That is not a correct response, please reply "yes" or "no"');
  alert('That is not a correct response, please reply "yes" or "no"');
}


// Question Three

let answerThree = prompt('Are you afraid of heights?');

if (answerThree.toLocaleLowerCase() === 'yes' || answerThree.toLowerCase() === 'y'){
  //console.log('Yes I am afraid of heights');
  alert('Yes I am afraid of heights');
}
else if (answerThree.toLocaleLowerCase() === 'no' || answerThree.toLowerCase() === 'n'){
  //console.log('No I am not afraid of heights');
  alert('No I am not afraid of heights');
}
else {
  //console.log('That is not a correct response, please reply "yes" or "no"');
  alert('That is not a correct response, please reply "yes" or "no"');
}


// Question Four

let answerFour = prompt('Can you speak spanish?');

if (answerFour.toLocaleLowerCase() === 'yes' || answerFour.toLowerCase() === 'y'){
  //console.log('Yes I can speak spanish');
  alert('Yes I can speak spanish');
}
else if (answerFour.toLocaleLowerCase() === 'no' || answerFour.toLowerCase() === 'n'){
  //console.log('No I cannot speak Spanish');
  alert('No I cannot speak Spanish');
}
else {
  //console.log('That is not a correct response, please reply "yes" or "no"');
  alert('That is not a correct response, please reply "yes" or "no"');
}


// Question Five

let answerFive = prompt('Have you ever held a monkey?');

if (answerFive.toLocaleLowerCase() === 'yes' || answerFive.toLowerCase() === 'y'){
  //console.log('Yes I have held a monkey');
  alert('Yes, my name is '+ user + ', and I am the MONKEY OVERLORD!');
}
else if (answerFive.toLocaleLowerCase() === 'no' || answerFive.toLowerCase() === 'n'){
  //console.log('No I have not held a monkey');
  alert('No, my name is '+ user + ', and I am not the monkey overlord...');
}
else {
  //console.log('That is not a correct response, please reply "yes" or "no"');
  alert('That is not a correct response ' + user + ', please reply "yes" or "no".');
}


// When the user scrolls the page, execute myFunction
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

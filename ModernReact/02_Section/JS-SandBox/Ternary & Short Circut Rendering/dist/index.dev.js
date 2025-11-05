"use strict";

var number = 5; // let message; 
// if(number % 2 === 0) {
//     message = 'Even number';
// } else {
//     message = 'Odd number';
// }

var message = number % 2 === 0 ? 'Even number' : 'odd number';
console.log(message);
var note = {
  title: 'Meeting notes',
  content: 'Discuss project roadmap',
  timestamp: Date.now(),
  isPinned: true
};
var noteText = " \n    Title: ".concat(note.title, ", \n    Status: ").concat(note.isPinned ? 'Pinned' : 'Unpinned', ", \n    Last Edited: ").concat(new Date(note.timestamp).toLocaleString(), "\n");
console.log(noteText); // short circuit rendering - show what ever is on the right side if the left side is true

console.log(true && 'Hello');
var isLoggedIn = true;

function showWelcome() {
  //return isLoggedIn && 'Welcome, User!';
  return isLoggedIn ? "Welcome, User!" : '';
}

console.log(showWelcome());
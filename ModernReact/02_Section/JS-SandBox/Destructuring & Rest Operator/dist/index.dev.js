"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var notes = [{
  title: "Meetings Notes",
  content: "Discuss project roadmap"
}, {
  title: "Grocery List",
  content: "Buy milk, eggs, bread"
}, {
  title: "Workout plan",
  content: "Push day: Bench, Shoulder Press"
}, {
  title: "Recipe Ideas",
  content: "Pasta, Salad, Tacos"
}]; // ... - rest operator

var firstNote = notes[0],
    secondNote = notes[1],
    otherNotes = notes.slice(2);
console.log(firstNote);
console.log(secondNote);
console.log(otherNotes); // destructing objects

var note = {
  title: 'Meetings Notes',
  content: 'Discuss project roadmap',
  isPinned: true
}; // has to match the key names in the object

var noteTitle = note.title;
console.log(noteTitle); // nested destructuring

var user = {
  name: 'Ben',
  address: {
    city: 'Boston',
    state: 'MA'
  },
  hobbies: ['Movies', 'Music', 'Sports']
};

var name = user.name,
    _user$address = user.address,
    city = _user$address.city,
    state = _user$address.state,
    _user$hobbies = _slicedToArray(user.hobbies, 1),
    firstHobby = _user$hobbies[0]; //console.log(city, state);


console.log(firstHobby);
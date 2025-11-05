const notes = [
  { title: "Meetings Notes", content: "Discuss project roadmap" },
  { title: "Grocery List", content: "Buy milk, eggs, bread" },
  { title: "Workout plan", content: "Push day: Bench, Shoulder Press" },
  { title: "Recipe Ideas", content: "Pasta, Salad, Tacos" },
];

// ... - rest operator
const [firstNote, secondNote, ...otherNotes] = notes;

console.log(firstNote);
console.log(secondNote);
console.log(otherNotes);


// destructing objects

const note = {
    title: 'Meetings Notes',
    content: 'Discuss project roadmap',
    isPinned: true,
};

// has to match the key names in the object
const { title: noteTitle} = note;
console.log(noteTitle);

// nested destructuring
const user = { 
    name: 'Ben',
    address: { city: 'Boston', state: 'MA' },
    hobbies: ['Movies', 'Music', 'Sports'],
};

const { 
    name, 
    address: { city, state },
     hobbies: [firstHobby] } = user;
//console.log(city, state);
console.log(firstHobby);
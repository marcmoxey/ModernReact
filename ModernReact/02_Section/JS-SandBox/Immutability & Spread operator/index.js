

const notes = ['Meeting Notes', 'Grocery List'];
//notes.push('To-Do List'); // mutable way
//const newNotes = [...notes, 'Workout Plan']; // made a copy using spread operator
const newNotes = 'Grocery List' ? 'Shopping List' : notes; // immutable way
console.log(notes);
console.log(newNotes); 

const user = {
    name: 'John Doe',
    age: 30
}

const newUser = {
    ...user, // made a copy using spread operator
    age: 31 // updated age
}
//user.age = 31; // mutable way
console.log(user);
console.log(newUser);

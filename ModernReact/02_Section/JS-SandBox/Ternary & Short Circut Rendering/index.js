

const number = 5; 
// let message; 

// if(number % 2 === 0) {
//     message = 'Even number';
// } else {
//     message = 'Odd number';
// }

const message = number % 2 === 0? 'Even number' : 'odd number';
console.log(message);


const note = {
    title: 'Meeting notes', 
    content: 'Discuss project roadmap', 
    timestamp: Date.now(), 
    isPinned: true
}; 

const noteText = ` 
    Title: ${note.title}, 
    Status: ${note.isPinned ? 'Pinned' : 'Unpinned' }, 
    Last Edited: ${new Date(note.timestamp).toLocaleString()}
`;

console.log(noteText);

// short circuit rendering - show what ever is on the right side if the left side is true
console.log(true && 'Hello');

const isLoggedIn = true;

function showWelcome() {
    //return isLoggedIn && 'Welcome, User!';
    return isLoggedIn ? "Welcome, User!" : '';
}

console.log(showWelcome());

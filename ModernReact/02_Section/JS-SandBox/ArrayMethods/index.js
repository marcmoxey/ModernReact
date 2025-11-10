//  const notes = [
//    { title: "Meetings Notes", content: "Discuss project roadmap" },
//    { title: "Grocery List", content: "Buy milk, eggs, bread" },
//    { title: "Workout plan", content: "Push day: Bench, Shoulder Press" },
//    { title: "Recipe Ideas", content: "Pasta, Salad, Tacos" },
//  ];

//  const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);
//  console.log(noteTitles);

const notes =  [
    {
        title: 'Meeting Notes',
        content: 'Discuss project roadmap',
        isPinned: true,
    },
    {
        title: 'Grocery List',
        content: 'Buy milk, eggs, bread',
        isPinned: false,
    },
    {
        title: 'Workout Plan',
        content: 'Push day: Bench, Shoulder Press',
        isPinned: false,
    },
    {
        title: 'Recipe Ideas',
        content: 'Pasta, Salad, Tacos',
        isPinned: true,
    }
]


const pinnedNotes = notes
.filter((note) => note.isPinned)
.map((note) => note.title);
console.log(pinnedNotes);

const numbers = [1,2,3,4,5]
// starts a 0 then adds each number to the total
const sum = numbers.reduce((total, number) => total + number, 0 );
console.log(sum);

const totalCharacter = notes.reduce((total, note) => total + note.content.length,0);
console.log(totalCharacter);

notes.forEach((note) => console.log(note.title));
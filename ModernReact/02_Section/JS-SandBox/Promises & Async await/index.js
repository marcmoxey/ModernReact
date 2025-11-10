// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve("Promise resolved!")
//         reject("Promise rejected!")
//     }, 2000) // wait 2 sec
// });

// // calling the promises
// myPromise.then(( data) => {
//     console.log(data);
    
// }).catch(( error) => {
//     console.log(error);
// });

// fetch API 
// fetch('https://jsonplaceholder.typicode.com/posts/1') // returns a promise
//     .then(Response => Response.json()) 
//     .then((data) => console.log(data)) // gets the data
//     .catch((error) => console.log(error)); // catches the error


// Async await
//async function getData() 
const fetchData = async () => {
    try {
          const Response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
          );
          const data = await Response.json();
          console.log(data);
    } catch {
            console.log("Error fetching data");
    }
  
}

fetchData();
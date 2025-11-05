// function getRectangleArea(width, height)  {
//     return width * height;
// }
// console.log(getRectangleArea(5, 10)); // 50

const getRectangleArea = (width, height) => {
    return width * height;
}

console.log(getRectangleArea(5, 10));

const sayHello = (name) => console.log(`Hello, ${name}`);
sayHello("Marc");

const numbers = [1,2,3,4,5];

// const double = numbers.map(function(number) {
//     return number * 2;
// })

const double = numbers.map((number) => number * 2);

console.log(double);


const person = {
    name: 'Marc',
    sayHelloRegular: function() {
        console.log('Regular: ', this.name);
    },
    sayHelloArrow: () => {
        console.log('Arrow: ', this.name); // empty object
        
    }
};

person.sayHelloRegular(); // Regular: Marc
person.sayHelloArrow();  // Arrow: undefined
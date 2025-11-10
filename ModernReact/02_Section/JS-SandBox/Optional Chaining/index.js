const user = {
    name: 'Brad'
};

console.log(user.address?.city ?? 'Unknown');


let value = 0;
let result = value ?? 'Default Value';
console.log(result);



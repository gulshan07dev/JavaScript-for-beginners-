let obj = {
    id: 101,
    name: "Gulshan",
    age: 24
};

// Object.keys -> this function return all the key of the object in the form of array
console.log(Object.keys(obj));

// Object.value -> this function return all the value of the object in the form of array
console.log(Object.values(obj));

// Object.entries -> this function returned array contains the key-value pairs as two-element arrays, with each elements representing the key and value respectively
console.log(Object.entries(obj));

// Object.freeze
// Object.freeze(obj);
// obj.id = 100;
// console.log(obj);

// Object.seal
Object.seal(obj);
obj.id = 102;
console.log(obj);

// Object.assign
let a = Object.assign(obj);
console.log(a);
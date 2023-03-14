// ...............spread..............

function add(a, b, c) {
    return a+b+c;
}

const numbers = [2, 4, 6];
// console.log(add(...numbers));

// ..............................................

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [arr1, arr2];
let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// ..............rest..................

let arr = "pw skills";
console.log([...arr]);
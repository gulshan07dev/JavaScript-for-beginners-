// An object is an entity (properties and method) with a certain state and
// behavior. Example include a car, pen, bicycle, chair, glass, keybord, and
// mnitor

// **object can contain many values.

// **object values are written as key:value pair (key and value separated by a colon)

// declare an object
let obj = {
    id: 101,
    name: "Alex",
    salary: 100
};
console.log(obj);
// console.log(obj[id]);

let emp = new Object();
console.log(emp);

function Emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}
let e = new Emp(103, "Any", 120);
console.log(e);

// accessing properties
console.log(obj.id);
console.log(obj.name);
console.log(obj.salary);

console.log(obj["id"]);
// console.log(obj[id]); // wrong method
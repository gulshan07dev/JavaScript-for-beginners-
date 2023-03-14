// A map in javascript is a collection of key-value pair where each key is unique.

// A map can be created using the Map() constractor, and values can be added to it
// using set() method. the get() method is used to retrieve the value associated
// with a key, and the has() method is used to check if a key exists in the Map.
// here is an example..
 

// syntax
// set(key, value);

let myMap = new Map();

// add new element to the map
myMap.set("apple", "5");
myMap.set("orange", "9");
myMap.set("grapes", "4");

// print the map
console.log(myMap.get("apple"));
// console.log(myMap.get("banana"));

// update an element in the map
myMap.set("orange", "6");
console.log(myMap.get("orange"));

// important method
console.log(myMap.has("orange"));
console.log(myMap.size);
myMap.delete("grapes");
console.log(myMap);
myMap.clear();
console.log(myMap);
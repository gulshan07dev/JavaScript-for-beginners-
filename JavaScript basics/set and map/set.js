// A set in Javascript is a collecttion of unique values of any any type.

// a set can be created using set() constructor, and values can be added 
// it using the add() method. the has method is used to check if a value exits in the set,
// and the delete() method is used to remove a value from the set. here is an example

const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("grapes");
mySet.add("mango");
mySet.add("mango"); // adding a duplicate value has no effect

console.log(mySet.has("apple")); // output - true
mySet.delete("banana");
console.log(mySet.size); // output - 4
console.log(mySet); 
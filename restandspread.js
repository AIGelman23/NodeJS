// where we add a new hobby we don't edit the original array but 
// need to add a new array with edited values
// we can avoid errors by copying and then editing, but don't edit
// existing objects that can add to more unreadable code

const hobbies = ['Sports', 'Cooking'];

const copiedArray = [...hobbies]; 
console.log(copiedArray);

// slice copies an array 

// ... operator just as plus or minus and take the array
// or object after the operator and pulls out the elements
// or properties of the object and put it into whatever is 
// around this operator and this case shows that it is pulled
// out of existing array it is inputted into a new array. 
// This works for objects and arrays 

// The REST operator 

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3));


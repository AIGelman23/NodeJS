const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
  console.log(hobby);
};

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

// objects and arrays are "reference types" and therefore
// when we store an array in constant hobbies we can still
// edit this array even though constants must not change

hobbies.push('Programming');
console.log(hobbies);
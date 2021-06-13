const name = max; 
let age = 29;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHadHobby) => {
  return ( 
    'Name is ' + 
    userName + 
    ', age is' + 
    userAge + 
    ' and the user has hobbies: ' +
    userHasHooby 
    );
};

// const add = (a, b) => a + b; // will always return result of statement 
// const addOne = a => a + 1;
const addRandom = () => 1 + 2; 

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
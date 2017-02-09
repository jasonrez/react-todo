const add = function (a, b) {
  return a + b;
}

const nums = [5,5]

console.log(add(2,2))
console.log(add(...nums))
console.log(...nums)

const groupA = ['Jen', 'Cory']
const groupB = ['Vikram']
const final = [...groupA,...groupB]
final[1] = 'dave';
console.log(...final);

const greet = (name, age) => console.log(`Hi ${name}, you are ${age}`)

const person = ['andrew', 25];
const personTwo = ['Jen', 29];

greet(...person)
greet(...personTwo)

final.forEach(name => console.log(`hi ${name}`));

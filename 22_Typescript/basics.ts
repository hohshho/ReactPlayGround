// Primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// Primitives

let age: Number;

age = 12;

let age2: Number = 13;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: String;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: String;
  age: number;
}[];

let cource: string | number = "React - The Complete Guide";

cource = 12341;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics
let arrayType: number | string;

function insertAtBeginning<T extends typeof arrayType>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const updatedArray = insertAtBeginning([1, 2, 3], -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

console.log(1);

console.log(updatedArray);
console.log(stringArray);

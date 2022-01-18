const fs = require("fs");
const validator = require("validator");
const { name, add } = require("./utils.js");

const sum = add(2, 3);

const yourNotes = require("./notes.js");

console.log(name);
console.log(sum);
console.log(yourNotes());
console.log(validator.isEmail("abc@gmail.com"));

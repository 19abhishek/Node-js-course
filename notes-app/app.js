const fs = require("fs");
// const validator = require("validator");
// const { name, add } = require("./utils.js");
// const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// const sum = add(2, 3);

// const yourNotes = require("./notes.js");
// const success = chalk.bold.red("Error!!");

// console.log(name);
// console.log(sum);
// console.log(yourNotes());
// console.log(validator.isEmail("abc@gmail.com"));
// console.log(success);

// const data = { name: "Abhishek", planet: "Earth", age: 24 };

// fs.writeFileSync("try-json.json", JSON.stringify(data));
// const dataBuffer = fs.readFileSync("try-json.json");
// console.log(dataBuffer.toString());
// console.log(JSON.parse(dataBuffer).age);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

yargs.command({
  command: "add",
  description: "Add a new Note!",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//This line is parsing the yargs file. If it's not included then we can simply parse it
// console.log(yargs.argv);

yargs.parse();

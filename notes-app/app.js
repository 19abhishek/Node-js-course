const fs = require("fs");
// const validator = require("validator");
// const { name, add } = require("./utils.js");
// const chalk = require("chalk");
const yargs = require("yargs");

// const sum = add(2, 3);

// const yourNotes = require("./notes.js");
// const success = chalk.bold.red("Error!!");

// console.log(name);
// console.log(sum);
// console.log(yourNotes());
// console.log(validator.isEmail("abc@gmail.com"));
// console.log(success);

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}

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
    console.log("Title:", argv.title);
    console.log("Body:", argv.body);
  },
});

//This line is parsing the yargs file. If it's not included then we can simply parse it
// console.log(yargs.argv);

yargs.parse();

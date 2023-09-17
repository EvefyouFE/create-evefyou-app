const program = require("commander");

const helpOptions = () => {
  program
    .option("-v --version", "current version")
    .option("init", "create project");
};

module.exports = helpOptions;

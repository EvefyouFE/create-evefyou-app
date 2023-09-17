#!/usr/bin/env node
const program = require("commander");

program.version(require("./package.json").version);

program
  .command("init")
  .description("create a new project")
  .alias("i")
  .action(() => {
    require("./commands/init");
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}

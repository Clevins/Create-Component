#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");

import getProgram from "./lib/getProgram";
import getComponent from "./lib/getComponent";
import { createComponent, createFolder } from "./lib/utils";

const program = getProgram();
const options = program.opts();

program.parse(process.argv);
const [componentName] = program.args;

console.log(
  chalk.red(
    figlet.textSync("Create Component cli", { horizontalLayout: "full" })
  )
);

const parentFolderPath = "./src/Components";
const componentFolderPath = `${parentFolderPath}/${componentName}`;

const newComponent = getComponent(options, componentName, componentFolderPath)!;

createFolder(componentFolderPath);
createComponent(newComponent);

#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const fs = require("fs");

import { Command, Option } from "commander";

import getComponent from "./lib/getComponent";

// import indexTemplate from "./Templates/React/JS/index";
// import componentTemplate from "./Templates/React/JS/Template";

let indexTemplate: HandlebarsTemplateDelegate<any>;
let componentTemplate: HandlebarsTemplateDelegate<any>;

import { Frameworks, FrameworkTypes } from "./CustomTypes/Framworks";

const program = new Command();

// Options

// Framework (--framework -f)
// - React
// - Vue
// - Svelte

// Lanugage
// - TS
// - JS

// Src

console.log(
  chalk.red(
    figlet.textSync("Create Component cli", { horizontalLayout: "full" })
  )
);

program
  .arguments("<name>")
  .addOption(
    new Option(
      "-f --framework <Frameworks>",
      "Component for Specified JS Framwork"
    ).choices(Frameworks)
  )
  .addOption(
    new Option("-ts, --typescript", "Use TypeScript").conflicts("javascript")
  )
  .addOption(
    new Option("-js, --javascript", "Use JavaScript").conflicts("typescript")
  );

// .option("-ts, --typescript", "Use TypeScript")
// .option("-js, --javascript", "Use JavaScript");

program.parse(process.argv);

const options = program.opts();

if (options.debug) console.log(options);

if (options.framework) console.log(`- ${options.framework}`);
if (options.typescript) console.log(`- TS ${options.typescript}`);
if (options.javascript) console.log(`- JS ${options.javascript}`);

const folderPath = "./src/Components/";
const [componentName] = program.args;

const newFolderPath = `${folderPath}${componentName}`;

if (componentName) console.log(`- ${componentName}`);

const createFolder = () => {
  try {
    fs.mkdirSync(newFolderPath, { recursive: true });
  } catch (err) {
    console.error(err);
  }
};

const createFile = (path: string, content: string) => {
  fs.writeFile(path, content, (err: string | undefined) => {
    if (err) throw new Error(err);
    console.log("Created file: ", path);
    return true;
  });
};

const createComponent = async () => {
  const newComponent = getComponent(options)!;

  const {
    indexTemplate,
    componentTemplate,
    indexFileExtension,
    componentFileExtension,
  } = newComponent;

  const data = {
    name: componentName,
  };

  const index = indexTemplate(data).replace(/`/g, "");
  const component = componentTemplate(data).replace(/`/g, "");

  createFile(`${newFolderPath}/index.${indexFileExtension}`, index);

  createFile(
    `${newFolderPath}/${componentName}.${componentFileExtension}`,
    component
  );
};

createFolder();
createComponent();

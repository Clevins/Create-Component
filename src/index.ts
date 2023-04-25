#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const fs = require("fs");

import { Command, Option } from "commander";
import Handlebars from "handlebars";

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

const getTemplateSrc = () => {
  console.log("here");
  switch (options.framework) {
    case FrameworkTypes.REACT:
      console.log("here");
      if (options.typescript) {
        console.log("here");
        return {
          path: "./src/Templates/React/TS",
          componentFileExtension: "tsx",
          indexFileExtension: "ts",
        };
      }
      return {
        path: "./src/Templates/React/JS",
        componentFileExtension: "jsx",
        indexFileExtension: "js",
      };

    case FrameworkTypes.SVELTE:
      break;
    case FrameworkTypes.VUE:
      break;
  }
};

async function readFile(path: string) {
  try {
    const data = await fs.readFileSync(path, { encoding: "utf8" });
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}

const readFilePromise = (path: string) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err: any, text: any) => {
      err ? reject(err) : resolve(text);
    });
  });

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
  const templateSrc = getTemplateSrc();

  console.log(templateSrc);

  const componentString = await readFilePromise(
    `${templateSrc?.path}/Template.ts`
  );

  const indexString = await readFilePromise(`${templateSrc?.path}/index.ts`);
  // console.log(indexString);

  // console.log(componentString);

  const componentTemplate = Handlebars.compile(componentString);
  const indexTemplate = Handlebars.compile(indexString);
  console.log(componentTemplate);

  const data = {
    name: componentName,
  };

  const index = indexTemplate(data).replace(/`/g, "");
  const dssss = componentTemplate(data).replace(/`/g, "");

  console.log(index);

  createFile(
    `${newFolderPath}/${componentName}.${templateSrc?.componentFileExtension}`,
    dssss
  );
  createFile(
    `${newFolderPath}/index.${templateSrc?.indexFileExtension}`,
    index
  );
};

createFolder();
createComponent();

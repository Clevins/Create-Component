const fs = require("fs");

import { OptionValues } from "commander";
import getComponent from "../lib/getComponent";
import Component from "./Component";

export const createFolder = (componentFolderPath: string) => {
  try {
    fs.mkdirSync(componentFolderPath, { recursive: true });
  } catch (err) {
    console.error(err);
  }
};

export const createFile = (path: string, content: string) => {
  try {
    fs.writeFileSync(path, content);
    console.log("Created Component: ", path);
  } catch (e) {
    throw new Error();
  }
};

export const createComponent = async (newComponent: Component) => {
  const {
    name,
    componentFolderPath,
    hasIndex,
    indexTemplate,
    componentTemplate,
    indexFileExtension,
    componentFileExtension,
  } = newComponent;

  const data = { name };

  const component = componentTemplate(data).replace(/`/g, "");
  const componentFilePath = `${componentFolderPath}/${name}.${componentFileExtension}`;
  createFile(componentFilePath, component);

  if (hasIndex) {
    const index = indexTemplate(data).replace(/`/g, "");
    const indexFilePath = `${componentFolderPath}/index.${indexFileExtension}`;
    createFile(indexFilePath, index);
  }
};

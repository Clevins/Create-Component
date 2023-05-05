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
  fs.writeFile(path, content, (err: string | undefined) => {
    if (err) throw new Error(err);
    console.log("Created Component: ", path);
    return true;
  });
};

export const createComponent = async (newComponent: Component) => {
  const {
    name,
    componentFolderPath,
    indexTemplate,
    componentTemplate,
    indexFileExtension,
    componentFileExtension,
  } = newComponent;

  const hasIndexFile = true;

  const data = { name };

  const component = componentTemplate(data).replace(/`/g, "");
  const componentFilePath = `${componentFolderPath}/${name}.${componentFileExtension}`;
  createFile(componentFilePath, component);

  if (hasIndexFile) {
    const index = indexTemplate(data).replace(/`/g, "");
    const indexFilePath = `${componentFolderPath}/index.${indexFileExtension}`;
    createFile(indexFilePath, index);
  }
};

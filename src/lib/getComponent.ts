import { OptionValues } from "commander";
import { FrameworkTypes } from "../CustomTypes/Framworks";
import Component from "./Component";

import reactJSIndexTemplate from "../Templates/React/JS/index";
import reactJSComponentTemplate from "../Templates/React/JS/template";

import reactTSIndexTemplate from "../Templates/React/TS/index";
import reactTSComponentTemplate from "../Templates/React/TS/template";

import vueJSComponentTemplate from "../Templates/Vue/JS/template";
import vueTSComponentTemplate from "../Templates/Vue/TS/template";

import svelteJSComponentTemplate from "../Templates/Svelte/JS/template";
import svelteTSComponentTemplate from "../Templates/Svelte/TS/template";

const getComponent = (
  options: OptionValues,
  componentName: string,
  componentFolderPath: string
) => {
  switch (options.framework) {
    case FrameworkTypes.REACT:
      if (options.typescript) {
        return new Component(
          componentName,
          componentFolderPath,
          true,
          reactTSComponentTemplate,
          "tsx",
          "ts",
          reactTSIndexTemplate
        );
      }
      return new Component(
        componentName,
        componentFolderPath,
        true,
        reactJSComponentTemplate,
        "jsx",
        "js",
        reactJSIndexTemplate
      );

    case FrameworkTypes.SVELTE:
      if (options.typescript) {
        return new Component(
          componentName,
          componentFolderPath,
          false,
          svelteTSComponentTemplate,
          "svelte",
          "ts"
        );
      }
      return new Component(
        componentName,
        componentFolderPath,
        false,
        svelteJSComponentTemplate,
        "svelte",
        "js"
      );
    case FrameworkTypes.VUE:
      if (options.typescript) {
        return new Component(
          componentName,
          componentFolderPath,
          false,
          vueTSComponentTemplate,
          "vue",
          "ts"
        );
      }
      return new Component(
        componentName,
        componentFolderPath,
        false,
        vueJSComponentTemplate,
        "vue",
        "js"
      );
  }
};

export default getComponent;

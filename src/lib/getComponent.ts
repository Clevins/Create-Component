import { OptionValues } from "commander";
import { FrameworkTypes } from "../CustomTypes/Framworks";
import Component from "./Component";

import reactJSIndexTemplate from "../Templates/React/JS/index";
import reactJSComponentTemplate from "../Templates/React/JS/template";

import reactTSIndexTemplate from "../Templates/React/TS/index";
import reactTSComponentTemplate from "../Templates/React/TS/template";

import vueJSIndexTemplate from "../Templates/Vue/JS/index";
import vueJSComponentTemplate from "../Templates/Vue/JS/template";

import vueTSIndexTemplate from "../Templates/Vue/TS/index";
import vueTSComponentTemplate from "../Templates/Vue/TS/template";

import svelteJSIndexTemplate from "../Templates/Svelte/JS/index";
import svelteJSComponentTemplate from "../Templates/Svelte/JS/template";

import svelteTSIndexTemplate from "../Templates/Svelte/TS/index";
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
          reactTSIndexTemplate,
          reactTSComponentTemplate,
          "tsx",
          "ts"
        );
      }
      return new Component(
        componentName,
        componentFolderPath,
        reactJSIndexTemplate,
        reactJSComponentTemplate,
        "jsx",
        "js"
      );

    case FrameworkTypes.SVELTE:
      if (options.typescript) {
        return new Component(
          componentName,
          componentFolderPath,
          svelteTSIndexTemplate,
          svelteTSComponentTemplate,
          "svelte",
          "ts"
        );
      }
      return new Component(
        componentName,
        componentFolderPath,
        svelteJSIndexTemplate,
        svelteJSComponentTemplate,
        "svelte",
        "js"
      );
    case FrameworkTypes.VUE:
      if (options.typescript) {
        return new Component(
          componentName,
          componentFolderPath,
          vueTSIndexTemplate,
          vueTSComponentTemplate,
          "vue",
          "ts"
        );
      }
      return new Component(
        componentName,
        componentFolderPath,
        vueJSIndexTemplate,
        vueJSComponentTemplate,
        "vue",
        "js"
      );
  }
};

export default getComponent;

import { Command, Option } from "commander";
import { Frameworks, FrameworkTypes } from "../CustomTypes/Framworks";

const program = new Command();

const getProgram = () => {
  program
    .name("create-component")
    .description(
      "CLI to quickly create boilerplate components in React, Svelte or Vue"
    )
    .version("1.0.0");

  program
    .arguments("<name>")
    .addOption(
      new Option(
        "-f --framework <Frameworks>",
        "Component for Specified JS Framwork"
      )
        .choices(Frameworks)
        .makeOptionMandatory()
    )
    .addOption(
      new Option("-ts, --typescript", "Use TypeScript").conflicts("javascript")
    )
    .addOption(
      new Option("-js, --javascript", "Use JavaScript").conflicts("typescript")
    );

  return program;
};

export default getProgram;

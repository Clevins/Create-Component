#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var path = require("path");
var fs = require("fs");
var commander_1 = require("commander");
var handlebars_1 = __importDefault(require("handlebars"));
var Framworks_1 = require("./CustomeTypes/Framworks");
var program = new commander_1.Command();
// Options
// Framework (--framework -f)
// - React
// - Vue
// - Svelte
// Lanugage
// - TS
// - JS
// Src
console.log(chalk.red(figlet.textSync("Create Component cli", { horizontalLayout: "full" })));
program
    .arguments("<name>")
    .addOption(new commander_1.Option("-f --framework <Frameworks>", "Component for Specified JS Framwork").choices(Framworks_1.Frameworks))
    .addOption(new commander_1.Option("-ts, --typescript", "Use TypeScript").conflicts("javascript"))
    .addOption(new commander_1.Option("-js, --javascript", "Use JavaScript").conflicts("typescript"));
// .option("-ts, --typescript", "Use TypeScript")
// .option("-js, --javascript", "Use JavaScript");
program.parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
if (options.framework)
    console.log("- ".concat(options.framework));
if (options.typescript)
    console.log("- TS ".concat(options.typescript));
if (options.javascript)
    console.log("- JS ".concat(options.javascript));
var folderPath = "./src/Components/";
var componentName = program.args[0];
var newFolderPath = "".concat(folderPath).concat(componentName);
if (componentName)
    console.log("- ".concat(componentName));
var getTemplateSrc = function () {
    switch (options.framework) {
        case Framworks_1.FrameworkTypes.REACT:
            if (options.typescript) {
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
        case Framworks_1.FrameworkTypes.SVELTE:
            break;
        case Framworks_1.FrameworkTypes.VUE:
            break;
    }
};
var createFolder = function () {
    try {
        fs.mkdirSync(newFolderPath, { recursive: true });
    }
    catch (err) {
        console.error(err);
    }
};
var createFile = function (path, content) {
    fs.writeFile(path, content, function (err) {
        if (err)
            throw new Error(err);
        console.log("Created file: ", path);
        return true;
    });
};
var createComponent = function () {
    var templateSrc = getTemplateSrc();
    var indexTemplate = handlebars_1.default.compile("".concat(templateSrc === null || templateSrc === void 0 ? void 0 : templateSrc.path, "/index.ts"));
    var componentTemplate = handlebars_1.default.compile("".concat(templateSrc === null || templateSrc === void 0 ? void 0 : templateSrc.path, "/Template.ts"));
    var data = {
        name: componentName,
    };
    var dss = indexTemplate(data);
    var dssss = componentTemplate(data);
    createFile("".concat(newFolderPath, "/").concat(componentName, ".").concat(templateSrc === null || templateSrc === void 0 ? void 0 : templateSrc.componentFileExtension), dssss);
    createFile("".concat(newFolderPath, "/index.").concat(templateSrc === null || templateSrc === void 0 ? void 0 : templateSrc.indexFileExtension), dss);
};
createFolder();
createComponent();

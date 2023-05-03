#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var index_1 = __importDefault(require("./Templates/React/JS/index"));
var Template_1 = __importDefault(require("./Templates/React/JS/Template"));
var Framworks_1 = require("./CustomTypes/Framworks");
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
    console.log("here");
    switch (options.framework) {
        case Framworks_1.FrameworkTypes.REACT:
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
        case Framworks_1.FrameworkTypes.SVELTE:
            break;
        case Framworks_1.FrameworkTypes.VUE:
            break;
    }
};
function readFile(path) {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.readFileSync(path, { encoding: "utf8" })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 2:
                    err_1 = _a.sent();
                    throw new Error(err_1);
                case 3: return [2 /*return*/];
            }
        });
    });
}
var readFilePromise = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, "utf-8", function (err, text) {
            err ? reject(err) : resolve(text);
        });
    });
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
var createComponent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var templateSrc, data, index, dssss;
    return __generator(this, function (_a) {
        templateSrc = getTemplateSrc();
        // 
        // console.log(path.resolve(dirname, 'file.txt'));
        // const componentString = await readFilePromise(
        //   `${templateSrc?.path}/Template.hbs`
        // );
        // const indexString = await readFilePromise(`${templateSrc?.path}/index.hbs`);
        // console.log(indexString);
        // console.log(componentString);
        // const componentTemplate = Handlebars.compile(componentString);
        // const indexTemplate = Handlebars.compile(indexString);
        console.log(Template_1.default);
        data = {
            name: componentName,
        };
        index = (0, index_1.default)(data).replace(/`/g, "");
        dssss = (0, Template_1.default)(data).replace(/`/g, "");
        console.log(index);
        createFile("".concat(newFolderPath, "/").concat(componentName, ".").concat(templateSrc === null || templateSrc === void 0 ? void 0 : templateSrc.componentFileExtension), dssss);
        createFile("".concat(newFolderPath, "/index.").concat(templateSrc === null || templateSrc === void 0 ? void 0 : templateSrc.indexFileExtension), index);
        return [2 /*return*/];
    });
}); };
createFolder();
createComponent();

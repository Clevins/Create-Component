"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars_1 = __importDefault(require("handlebars"));
var indexString = "import {{name}} from './{{name}}';\n\nexport default {{name}};\n";
var indexTemplate = handlebars_1.default.compile(indexString);
exports.default = indexTemplate;

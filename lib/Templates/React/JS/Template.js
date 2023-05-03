"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars_1 = __importDefault(require("handlebars"));
var componentString = "import React from \"react\"\n\nconst {{name}} = () => {\n\n  return (\n    <div>\n      <p>{{name}} Component</p>\n    </div>\n  );\n};\n\n\nexport default {{name}};";
var componentTemplate = handlebars_1.default.compile(componentString);
exports.default = componentTemplate;

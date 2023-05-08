export default class Component {
  name: string;
  componentFolderPath: string;
  hasIndex: boolean;
  indexTemplate?: HandlebarsTemplateDelegate<any>;
  componentTemplate: HandlebarsTemplateDelegate<any>;
  componentFileExtension: string;
  indexFileExtension: string;

  constructor(
    name: string,
    componentFolderPath: string,
    hasIndex: boolean,
    componentTemplate: HandlebarsTemplateDelegate<any>,
    componentFileExtension: string,
    indexFileExtension: string,
    indexTemplate?: HandlebarsTemplateDelegate<any>
  ) {
    this.name = name;
    this.componentFolderPath = componentFolderPath;
    this.hasIndex = hasIndex;
    this.indexTemplate = indexTemplate;
    this.componentTemplate = componentTemplate;
    this.componentFileExtension = componentFileExtension;
    this.indexFileExtension = indexFileExtension;
  }
}

export default class Component {
  name: string;
  componentFolderPath: string;
  indexTemplate: HandlebarsTemplateDelegate<any>;
  componentTemplate: HandlebarsTemplateDelegate<any>;
  componentFileExtension: string;
  indexFileExtension: string;

  constructor(
    name: string,
    componentFolderPath: string,
    indexTemplate: HandlebarsTemplateDelegate<any>,
    componentTemplate: HandlebarsTemplateDelegate<any>,
    componentFileExtension: string,
    indexFileExtension: string
  ) {
    this.name = name;
    this.componentFolderPath = componentFolderPath;
    this.indexTemplate = indexTemplate;
    this.componentTemplate = componentTemplate;
    this.componentFileExtension = componentFileExtension;
    this.indexFileExtension = indexFileExtension;
  }
}

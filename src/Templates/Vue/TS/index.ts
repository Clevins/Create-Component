import Handlebars from "handlebars";


const indexString = `import {{name}} from './{{name}}';
//Vue TS
export default {{name}};
`

const indexTemplate = Handlebars.compile(indexString);

export default indexTemplate
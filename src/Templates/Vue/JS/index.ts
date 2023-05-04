import Handlebars from "handlebars";


const indexString = `import {{name}} from './{{name}}';
//Vue JS

export default {{name}};
`

const indexTemplate = Handlebars.compile(indexString);

export default indexTemplate
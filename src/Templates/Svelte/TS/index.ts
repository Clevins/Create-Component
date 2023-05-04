import Handlebars from "handlebars";


const indexString = `import {{name}} from './{{name}}';
// Svelte TS

export default {{name}};
`

const indexTemplate = Handlebars.compile(indexString);

export default indexTemplate
import Handlebars from "handlebars";


const componentString = `import { FC } from "react"

type {{name}}Props = {
    example: string,

  }

const {{name}}: FC<{{name}}Props> = ({example}) => {

  return (
    <div>
      <p>{{name}} Component</p>
    </div>
  );
};


export default {{name}};`

const componentTemplate = Handlebars.compile(componentString);

export default componentTemplate

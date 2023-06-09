import Handlebars from "handlebars";


const componentString = `import React from "react"

const {{name}} = () => {

  return (
    <div>
      <p>{{name}} Component</p>
    </div>
  );
};


export default {{name}};`

const componentTemplate = Handlebars.compile(componentString);

export default componentTemplate

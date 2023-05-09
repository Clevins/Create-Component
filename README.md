
# create-component-ts

A CLI used for quickly creating component boilerplates for multiple JS frameworks such as React, Svelte, and Vue. 

## Features

- Create boilerplate components for:
    - React
    - Svelte 
    - Vue
- Supported lanuguages:
    - JavaScript
    - TypeScript
- A clean and easy to use CLI


## Installation

Install create-component-ts with npm

```bash
  npm install -g create-component-ts
```
    ## Usage/Examples
To use create-component-ts follow these steps: 

Open a terminal and cd into any project you want to create a component in.

```
cd react-project-folder
```

To create a new React JS component run the following in the root of your project folder.
```
create-component-ts ComponentName -f react
```

For react components, two files will be created:

- index.js
- Button.jsx
## Usage/Examples
To use create-component-ts follow these steps: 

Open a terminal and cd into any project you want to create a component in.

```
cd react-project-folder
```

To create a new React JS component run the following in the root of your project folder.
```
create-component-ts ComponentName -f react -ts
```

For react components, two files will be created:

- index.ts
- Button.tsx

The default path for these files is src/components/Button.

The default path for these files is src/components/Button.
## API Reference

To select the framework , use the ```-f  --framework``` flag. the options are:
```
-f react
-f svelte
-f vue
```

To select the language use the following flags.

For TypeScript:
```
-ts
```

For JavaScript
```
-js
```

If either of these flags are not provided it will **default to JavaScript**.
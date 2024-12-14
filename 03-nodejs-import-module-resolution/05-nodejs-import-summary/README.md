# Node.js `import` Module Resolution Summary

## Module resolution for relative specifiers

- For relative specifiers, module resolution is exactly like browser module resolution:

- Absolutize the URL of the module specifier relative to the URL of the importing module.

- This means that the file extension of the file _must_ be specified.

## Module resolution for bare specifiers

- If the specifier is a bare specifier:

- It travels up the directory tree looking for `node_modules` directories.

- If it finds one with a sub directory with the name of the bare specifier:

  - It looks either for an `index.js`...

  - ...or a `package.json` with a `main` or `exports` field (`exports` wins).

  - In both cases, the `exports` points to the file that is the entry point.

- When `main` is used, the user of the package can "deep link" into the package by specifying the path to the file
  they want to import (e.g. `import { goodbye } from 'hello/goodbye.js'`).

- But `exports` blocks that ability, and adds the ability to have multiple entry points:

```json
{
  "exports": {
    ".": "./hello.js",
    "./goodbye": "./goodbye.js"
  }
}
```

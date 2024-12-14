# Node.js `require` Module Resolution Summary

## Module resolution for relative specifiers

- For relative specifiers, module resolution is a superset of the resolution for `import`

- Absolutize the path of the module specifier relative to the path of the importing module.

- If the file extension is specified, great.

- If not, try to find the file with the extensions: `.js`, `.cjs`, `.mjs`, `.json`, `.node`.

- If found, great.

- If not, look for a folder with that name, and look for an `index.js` or `package.json`.
  In essence treat that folder like a package folder, from the algorithm for bare specifiers

## Module resolution for bare specifiers

- If the specifier is a bare specifier:

- It travels up the directory tree looking for `node_modules` directories.

- If it finds one with a sub directory with the name of the bare specifier:

  - It looks either for an `index.js`...

  - ...or a `package.json` with a `main` or `exports` field (`exports` wins).

  - In both cases, the `exports` points to the file that is the entry point.

- When `main` is used, the user of the package can "deep link" into the package by specifying the path to the file
  they want to import (e.g. `const { goodbye } = require('hello/goodbye.js')`).

- But `exports` blocks that ability, and adds the ability to have multiple entry points:

```json
{
  "exports": {
    ".": "./hello.js",
    "./goodbye": "./goodbye.js"
  }
}
```

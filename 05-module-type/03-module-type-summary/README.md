# Module Type Summary

- There's a large algorithm that determines how to resolve the specifier in an `import` or a `require`.

- But once that file is found, Node.js has to determine what the type of the file is - ESM or CommonJS.

- Why? Because they are treated differently. Some of the differences:

  - ESM files can have `import` statements, and CommonJS can only use `await import`

  - CommonJS files can have `require` statements, but to use `require`, ESM needs to write some code.

  - In ESM files, top-level `this` is `undefined`, but in CommonJS, it is the global object (`globalThis`).

  - In CommonJS files, top-level await is not allowed

- To determine the module type, Node.js looks at the file extension:

  - If it's `.mjs`, it's an ESM file

  - If it's `.cjs`, it's a CommonJS file

  - If it's `.js`, it could be either, buandt Node.js will look at the nearest `package.json` file to determine the type.

    - If `type: module` is set, it's an ESM file

    - If `type: commonjs` is set, it's a CommonJS file

    - If neither is set, it's a CommonJS file

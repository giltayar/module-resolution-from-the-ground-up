# 03 Module type summary

- There's a large algorithm that determines how to resolve the specifier in an `import` or a `require`.

- But once that file is found, Node.js has to determine what the type of the file is - ESM or CommonJS.

- Why? Because they are treated differently. Some of the differences:

  - ESM files can have `import` statements, and CommonJS can only use `await import`

  - CommonJS files can have `require` statements, but to use `require`, ESM needs to write some code.

  - In ESM files, top-level `this` is `undefined`, but in CommonJS, it is the global object (`globalThis`).

  - In CommonJS files, top-level await is not allowed

---

- To determine the module type, Node.js looks at the file extension:

  - If it's `.mjs`, it's an ESM file

  - If it's `.cjs`, it's a CommonJS file

  - If it's `.js`, it could be either, buandt Node.js will look at the nearest `package.json` file to determine the type.

    - If `type: module` is set, it's an ESM file

    - If `type: commonjs` is set, it's a CommonJS file

    - If neither is set, it's a CommonJS file

---

## Conditional exports

- An `exports` entry point in `package.json` can specify a "condition"

- This means specifying different files based on what the import is.

- Node.js conditions are:

  - `import`: when the file is `import`-ed
  - `require`: when the file is `require`-ed
  - `default`: always true.

- Conditions in the `exports` are evaluated from first to last, and the first
  condition wins.

- There are more conditions, some by Node.js, others by the community.

- You can find all Node.js conditions [here](05-module-type/01-determining-module-type-exercises/01/package.json).

- You can find the more interesting community conditions [here](05-module-type/01-determining-module-type-exercises/01/package.json).

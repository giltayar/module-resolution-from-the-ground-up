# 06 Conditional Exports

- The rules for determining the target files file type (i.e. CommonJS or ESM) are based on file extension:

  - `.cjs` for CommonJS

  - `.mjs` for ESM

  - `.js` looks for nearest `package.json` and uses the `type` field to determine file type

- So the target file type is unambiguous!

- No matter what the source file type is (ESM or CommonJS), the target file type does not rely on it.

- This is usually great, but really bad for library writers.

- What if they want to write a package that works both if you `require` it and if you `import` it?

- You use "conditional exports".

- The "exports" field enables multiple entry points to the package, and also blocks the user of the package
  from accessing its internals.

- The map from the name of the entry point to the file is usually like this:

```json
{
  "type": "module",
  "exports": {
    ".": "./src/index.js"
  }
}
```

- This tells Node.js that no matter whether we're `import`-ing or using `require`, the entry point should be
  `./src/index.js`.

- But it can also be "conditional":

```js
{
  "type": "module",
  "exports": {
    ".": {
      "import": "./src/index.js",
      "require": "./src/index.cjs"
    }
  }
}
```

- Now we're telling Node.js that if the user is using `import`, they should get `./src/index.js`, but if
  they're using `require`, they should get `./src/index.cjs`.

- We can see this happening in [`index.js`](./index.js), that `import`-s and `require` the same package and
  yet gets different results.


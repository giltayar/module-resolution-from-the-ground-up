## The `module` option `tsconfig.json`

- Most of the complexity in TypeScript configuration comes from how module resolution works.

- You can customize the resolution via the `moduleResolution` flag in TSConfig, with two good options:

  - `NodeNext`: works just like the Node.js resolution for ESM and CommonJS

  - `Bundler`: like `NodeNext`, but when the code uses ESM, it still uses the CommonJS algorithm.

- The `module` config deals with how the code is _transpiled_.

- For example, you may want to use `import` in your TypeScript code, but transpile it to CommonJS `require`.

- Lots of legacy options that we won't cover (`umd` anyone?), but we will cover the following:

  - `commonjs`: transpile all `import`-s to `require`

  - `esnext`: transpiles everything to `import`

  - `nodenext`: transpiles to `import` or to `require` based on what the file should be according to Node.js
    module resolution rules

  - `preserve`: doesn't touch the import or require. Preserves what is there.

- Note that if you specify `module` it comes with default `moduleResolution` which makes sense

- We will not be covering this much because this talk is about module resolution.

# 05 Module Type

- Module resolution works differently if we use `import` and if we use `require` . For relative paths, `import` module resolution is simple and like the browser, and for bare specifiers and for relative paths in the `require` case, everything is more complicated and the algorithm involves guessing extensions and going up folders looking for the right folder in `node_modules` , and using `package.json` fields `main` and `export` .
- But let's think about _where_ `import` and `require` are used. In most cases, `import` is used in ESM files, and `require` is used in CommonJS. I actually _can't_ use `import` in CommonJS regularly, and _can't use `require`_ in ESM regularly.
- But there are cases where I can: `await import(...)` can be used in CommonJS, and you can with some additional lines of code, you can use `require` in ESM.
- So what about the _target_ file? Once Node.js finds a file, how does it know whether it's an ESM or a CommonJS file?
- This is important, because besides the difference of using/not using `import` and `require`, there are various minor differences in how JavaScript executes ESM or CommonJS.
  - For example, in ESM, the `this` in the top-level is `undefined` and in CommonJS it is equal to `globalThis`.
  - For example, in ESM, you can use top-level await, and in CommonJS you can't.
- Once Node.js finds a file, how does it know whether it's an ESM or a CommonJS file?
- The answer is somewhat complicated, but it starts with - it looks at the extension.
- If the extension is `.cjs`, then it's CommonJS
- If the extension is `.mjs` , then it's ESM
- If it's `.js`, then it has to look at the "nearest" `package.json` (by going up the folders and looking for a `package.json` )
  - If it has `type: module` then the file is ESM
  - If it has `type: commonjs` the the file is CommonJS
  - If there is no `type` or no `package.json`, then the file is CommonJS
- If it's `.json`? Well, then it doesn't matter - it's just JSON.

# Finding the types in bare specifiers

- When specifying a relative specifier, e.g. `./hello.js`, TypeScript doesn't really need the `.ts` file,
  the `.d.ts` file is enough to transpile the source file that imports `./hello.js`

- This isn't very useful for relative specifiers, because the code is usually all TypeScript, so `./hello.ts`
  _will_ be there.

- But when using packages, e.g. `import {hello} from 'hello'`, this _is_ important, because packages
  are distributed via JavaScript code and not TypeScript code. So how does TypeScript figure out the types
  of the code in the package?

- It uses the `types` condition. When resolving the _module_, it uses the regular `import` or `require` condition,
  but when resolving _types_ it does the same, but resolves using the `types` condition.

- And just like `exports` has `main` as a legacy field for module resolution,
  so `exports` has `types` as a legacy field for type resolution.

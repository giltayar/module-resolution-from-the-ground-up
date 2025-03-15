# 02 The `moduleResolution: nodenext` option in `tsconfig.json`

- TypeScript has a `moduleResolution` option in `tsconfig.json`, that enables it to use different module resolution
  algorithms. Most are a relic of a bygone era, but two are really useful. Let's start with...

- `moduleResolution: nodenext`

- This optionn means that module resolution follows the Node.js resolution algorithm for CommonJS
  (if it's a CommonJS file) or ESM (if it's an ESM file).

- So it follows the rules that I explained in our lessons around Node.js module resolution.

- Notice the import - `import {hello} from './hello.js'`. Why is it `./hello.js` and not `./hello.ts`?

- Because TypeScript will _not_ touch the specifier when transpiling! This is a rule that TypeScript follows:
  don't modify anything that is unrelated to types.

- TypeScript TypeScript doesn't want to modify the code, only erase the types. And the import specifier is
  not type-related, so it doesn't want to touch it. Makes sense? Yes. Weird? Yes!

- This is how the transpilation proceeds.

![](images/import-transpile.png)

- So if TypeScript is not "allowed" to touch the specifier,
  then the import in `index.js` MUST work, and thus MUST be `./hello.js`.

- But there is _no_ `hello.js` file in the directory! Only `hello.ts`.
  So how does this work?

- TypeScript _reverse engineers_ (or inverse maps) the `hello.js` to `hello.ts`
  because it understands that the file `./hello.js` is what the `hello.ts` will
  transpile to.

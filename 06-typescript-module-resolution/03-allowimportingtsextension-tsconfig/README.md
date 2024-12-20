# 03 The `allowImportingTsExtensions` Option in `tsconfig.json`

- Because TypeScript does not want to modify the relative specifier, we must specify the path in terms of how
  the file we import is to be transpiled _in the output_.

- So if we're importing a `.ts` file, we know that it will be transpiled to `.js`, so the import MUST use the `.js`
  extension, and not the `.ts` extension!

- In our case, we want to import from the module `hello.ts`, so we write

```js
import {hello} from './hello.js'
```

- While this is weird, it makes sense once you realize that TypeScript only wants to erase types from our code,
  and not "touch" it anymore than that!

- This makes total sense when we're transpiling code, and running the _output_ code.

- But it does _not_ make sense when we're not transpiling, but running the TypeScript code directly.

- This happens in the new backend JavaScript runtimes, i.e. Deno and Bun, but also using the new Node.js ability
  to run TypeScript directly.

- In this case, the runtime passes the source code to TypeScript to transpile, but wants the final import to be:

```js
import {hello} from './hello.ts'
```

- So that module resolution is needed.

- To support this case, TypeScript added `allowImportingTsExtensions: true` in TSConfig.

- Note that this option does not mean that TypeScript will rewrite the extension to `.js`. It still won't!

- Moreover, because this code can't run anywhere, it works only with `noEmit: true` in TSConfig.

## `rewriteRelativeImportExtensions`

- This is great, but what if I want to run the code using the Node.js TypeScript support,
  _and_ build the JS files.

  - When? For example, a library that runs tests with the Node.js TypeScript support, without transpilation,
    and yet still wants to redistribute the JS files.

- The `rewriteRelativeImportExtensions` TSCibfug option  _does_ rewrite the specifier, but only
  for relative specifiers.

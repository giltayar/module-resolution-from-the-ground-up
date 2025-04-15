## 04 The `moduleResolution: bundler` Option in `tsconfig.json`

- The `bundler` module resolution algorithm is the Node.js CommonJS module resolution, but also implemented
  for ESM modules.

Let's look at `index.ts`:

```ts
// index.ts
import {hello} from './hello'

console.log(hello)
```

- Notice that the import specifier `./hello` does not specify the extension, and yet this is an ESM module!

- If we try to run it with the Node.js TypeScript support, it won't run, because the Node.js module resolution
  algorith won't find the module `./hello`.

- The `bundler` module resolution algorithm works just like the CommonJS one, but it also works in ESM files! This
  means that extensionless import specifiers are allowed, and TypeScript will search for the correct file
  (e.g. `.ts`, `.mts`, `.cts`, `.json`, `.js`, etc).

- Let's run `pnpm run build` and see what the resultant `index.js` is

```js
// dist/index.js

import {hello} from './hello'

console.log(hello)
```

- The import specifier still has no extension, so if we run it...

```sh
$ node dist/index.js
...
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../dist/hello' imported from .../dist/index.js
```

- It will fail and say that it cannot find the module `hello`.

- So if the option `bundler` generates output that doesn't work in Node.js
  and also (for the same reason) doesn't work in the browser,
  why is the option there at all?

- Historically, the `bundler` module resolution came before TypeScript. It was used by Babel and WebPack,
  before Node.js supported ESM and before browsers supported ESM.

  - All we had was CommonJS, so that when transpilers like Babel transpiled the `import` statement,
    they had to transpile it to `require`,
    and thus it made sense to use the CommonJS module resolution algorithm.

  - Nobody thought that when Node.js and browsers decided to suport ESM, they would decide not to support
    extensionless import specifiers.

- This means that a lot of code out there is using this module resolution. Source code that uses
  this extensionless module specifiers is called "Faux ESM" or "False ESM", because it looks like ESM,
  yet Node.js and the browser do not really support it.

- Because developers were used to not providing the extension, most code today _still_ uses extensionless
  import specifiers, even when Node.js and browsers don't support it.

- This is especially true for most frontend code, as bundlers anyway supported it.

- Please do not use this option in new projects, as it will generate code that bundlers can use,
  but Node.js can't, and these days, a lot of our code can now run both in the browser and in Node.js, and
  not using this option, but rather using the regular "nodenext" will save you a lot of configuration pain.

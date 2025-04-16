# 08 Custom Conditions

- When resolving a package entry point, TypeScript, just like Node.js, will use the `exports` field in `package.json`.

- When there are conditional exports, it will use the `import` condition to find them when
  the code uses `import` to import the package
  and the `require` condition when the code uses `require` to import the package.

- `import` and `require` are not the only conditions. We also saw `types`, which helps TypeScript resolve
  the `.d.ts` files of a package.

- But a package can define custom condition!

- For example, the package `hello` in `node_modules`:

```json
{
  "exports": {
    ".": {
      "crazy": {
        "types": "./goodbye.d.ts",
        "import": "./goodbye.js"
      },
      "types": "./hello.d.ts",
      "import": "./hello.js"
    }
  }
}
```

- The custom condition `crazy` defines the entry points to not be `hello.js` but rather `goodbye.js`.

- How is this custom condition triggered? If nothing is configured, then TypeScript will continue using
  `import/require` as usual.

- But if you add:

```json
    "customConditions": ["crazy"]
```

To the `tsconfig.json`, then TypeScript will first look for this condition before looking for `import/require`.

- This is why TypeScript has no problem type checking the following:

```ts
import {goodbye, world} from 'hello'
```

- The `tsconfig.json` is telling it to first check the `crazy` condition, so that when it goes to resolve
  the `hello` package, it finds the `crazy` condition in its `package.json` and uses `goodbye.*` as we saw above.

- But if we run the result `dist/index.js`?

```sh
$ node dist/index.js`

import { goodbye, world } from 'hello';
         ^^^^^^^
SyntaxError: The requested module 'hello' does not provide an export named 'goodbye'
```

- Yes, Node.js, when it resolves the `hello` package, it does _not_ use the `crazy` condition, and so resolves it to
  `hello.js`, which does not have a `goodbye` export.

- But we can change that:

```sh
$ node --conditions=crazy dist/index.js
Goodbye world
```

- The `conditions` option enables us to specify other conditions to Node.js, just like we did for TypeScript.


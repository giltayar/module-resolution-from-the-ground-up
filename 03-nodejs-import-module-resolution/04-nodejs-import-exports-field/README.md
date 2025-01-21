## 04 How Node.js supports multiple entry points with `exports`

Reminder: Node.js uses the `main` field in the `package.json` of a package to figure out the entry point

We've also seen that developers can use _any_ module they want in the package by deep-linking into them.

The `exports` field blocks this:

```js
// index.js
import {hello} from 'hello'

// node_modules/hello/hello.js
export const hello = 'Hello'
```

To make this work, we define the `hello/package.json` thus:

```json
{
  "exports": "./hello.js"
}
```

Note how you need to specify the `./` at the beginning of the path. Otherwise Node.js throws an error.

---

But what about this?

```js
// index.js
import {world} from 'hello/other-words/world'

// node_modules/hello/other-words/world
export const world = 'World'
```

The `exports` blocks any other exports, so this won't work.

Unless...

```json
{
  "exports": {
    ".": "./hello.js",
    "./others/world": "./world.js"
  }
}
```

The `exports` fields accept a "map" of entry points, where you can specify others and map them to files in the package!

---

This enables us to define multiple entry points to the package, and have the users of the package use _only_ them.

If the developer tries to deep-link into the package through a path that is not in the `exports`,
Node.js will throw an error.

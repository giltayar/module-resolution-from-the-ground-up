## 01 How does `require` module resolution work for relative paths?

- We've seen how Node.js does module resolution when the developers uses ESM's `import`.

- But what happens when the code is using CommonJS? Uses `const {something} = require('./something.js')`?

- Before talking about the more

- Module resolution of `require` is a _superset_ of module resolution of `import`!

- So all the rules we found for `import` also work for `require`. Except that they are _looser_. As an example.
  If I have

```jsx
import { hello } from "./say-hello.js";
```

- Then the same would work with `require`:

```jsx
const { require } = require("./say-hello.js");
```

- Nobody uses extensions in CommonJS, but they _do_ work! But CommonJS also works without the extension:

```jsx
const { require } = require("./say-hello");
```

- How does this work? Well, Node.js "guesses" the extension, and searches for files that have the following
  extensions:

- `.js`, `.cjs`, `.mjs`, `.json`, `.node`

- `.cjs` and `.mjs` are like `.js`, and we'll talk about them in a bit. `.json` you all know, and `.node` is a
  rarely used "binary" file

- But it gets worse! It will also look for a folder named `say-hello` that has an `index.js` in it.

- And... worse! Instead of `index.js` you can have a `package.json` with a `main/exports` field too.

- This is actually how Node.js works with folders in `node_modules` for `import`! Same algorithm...

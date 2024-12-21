## 02 What kinds of "import"-s are there?

- Module resolution is how the JS runtime resolves the specifier in `import {something} from '*specifier*'`.

- But is this the only way to import a module? No, there are two ways.

- ESM - the main one: `import {something} from '*specifier*'`

- CJS - the legacy one: `const {something} = require('*specifier*')`

- ESM was defined in 2015, but implementations really started being there only in 2020

- So until then, Node.js used CJS

- It's still most of NPM

---

- So `(current filepath/url, specifier, kind of import) => filepath/url`

- This is what defines a module resolver. This is the algorithm

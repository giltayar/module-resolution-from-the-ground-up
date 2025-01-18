# 02 What kinds of "import"-s are there?

Reminder: "module resolution" is how the JS runtime resolves the specifier in `import {something} from '*specifier*'`.

There are two ways to import a module in JavaScript

---

## Importing ESM

```js
// esm/index.js
import {show} from './show.js'
...

// esm/show.js
export function show(message) {
  console.log(message)
}
```

This is the standard and main way we import modules in JavaScript. Defined in 2015,
it was only broadly implemented in the 2020-s.

---

## Importing CommonJS

```js
// cjs/index.js
const {show} = require('./show')
...

// cjs/show.js
module.exports.show = function show(message) {
  console.log(message)
}
```

Node.js needed a module system before there was ESM, and so implemented CommonJS, a "userland" module system that
uses `require` to import a module and `module.exports` to export stuff from a module.

"Userland" means that the module system is fully implemented in JavaScript, by Node.js, without any help
from the JavaScript runtime. Compare that with "Native" ESM
that is implemented with the help of the JavaScript runtime.

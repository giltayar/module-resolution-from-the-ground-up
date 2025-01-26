# 02 How does `require` module resolution works for bare specifiers?

Reminder: Module resolution for Node.js relative paths is much more complicated in `require` than in `import`.
In `import` it works like in the browser - just absolutize the path and look for the file.
In CommonJS it also works without the file extension by guessing the extension from a list of known extensions,
e.g. `.js` or by looking inside a directory with that name.

For bare specifiers, there is actually no difference from `import`!

```js
// index.js
const throttle = require('p-throttle')

// node_modules/p-throttle/index.js
module.exports = function throttle() {
  //...
}
```
---

So it works the same, with support for:

- `index.js`
- `package.json` with `main` field
- `package.json` with `exports` field

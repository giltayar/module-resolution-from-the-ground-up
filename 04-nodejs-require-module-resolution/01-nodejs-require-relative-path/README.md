# 01 How does `require` module resolution work for relative paths?

Reminder: Node.js has support for ESM `import`

We've seen how relative specifiers work exactly like in the browser - you MUST have the extension because
it's taking the path as is.

We've seen how Node.js travels up the `node_modules` chain looking for the package directory, and we've seen
all the flags that are looked at in `package.json`, like `main` and `exports`.

```js
// index.js
const {world} = require('./say/world.js')

// say/world.js
module.exports.world = 'world'
```

As we can see above, relative specifiers in CommonJS work _just_ like in ESM.

But this works also without the extension:

```js
// index.js
const {world} = require('./say/world')

// say/world.js
module.exports.world = 'world'
```

Node.js "guesses" the extension, and searches for files that have the following extensions:
`.js`, `.cjs`, `.mjs`, `.json`, `.node`.

`.cjs` and `.mjs` are like `.js`, and we'll talk about them in a bit.
`.json` you all know, and `.node` is a rarely used "binary" file

But there's another option!

```js
// index.js
const {require} = require('./say/world')

// say/world/index.js
module.exports.world = 'world'
```

Node.js will also look for a directory named `say-hello` that has an `index.js` in it.

And... instead of `index.js` you can have a `package.json` with a `main/exports` field too:

```js
// index.js
const {require} = require('./say/world')

// say/world/package.json
{"main": "./foo.js"}

// say/world/foo.js
module.exports.world = 'world'
```

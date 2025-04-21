## 04 How does Node.js use `package.json`'s `main`?

Reminder: when importing a "bare specifier" (package), Node.js looks in the `node_module` folder for a package
that has the same name and uses the `index.js` file in it as the entry point.

But what if the file in the package is not named `index.js`? For example, here:

```js
// index.js
import {hello} from 'hello'

// node_modules/hello/hello.js
export const hello = 'Hello'
```

The above code shows how `index.js` is trying to import the `hello` package, but the hello package doesn't have
an `index.js`, but rather a `hello.js`.

---

This works if we add the following `package.json`:

```json
{
  "main": "hello.js"
}
```

Node.js will look in the `package.json` for a `main` field, and if it's there, it will use that instead of `index.js`.

---

## Using other entry points in the package

It seems the `main` is not the only entry point to a package.

You can use _any_ file in the package just by adding it's path to the bare specifier:

```js
// index.js
import {world} from 'hello/other-words/world.js'

// node_modules/hello/other-words/world.js
export const world = 'World'
```

This is not good, and to block this, we need to use the `exports` field, which we will learn in the next
lesson

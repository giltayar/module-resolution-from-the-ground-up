# The Node.js "import" field

Reminder: when you import a package, Node.js finds a package directory in the `node_modules`,
looks at its `package.json` to find the `exports` field that defines the entry points to the package.

So exports is used from _without_ the package, to figure out what modules to import inside it.

There is an "exports"-like mechanism to be used _inside_ the package:

```js
// index.js
import {show} from '#show'
import throttle from 'p-throttle'
```

That `#show` specifier points to a place _within_ the package, and is defined in the `package.json`:

```json
// package.json
{
  "imports": {
    "#show": "./show-utils/show.js"
  }
}
```

---

Notes:

- The `#` prefix is not optional - it is mandatory.

- You can specify not only a relative path - you can use any specifier, including a bare specifier!

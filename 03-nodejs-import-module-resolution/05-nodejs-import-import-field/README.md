# Node.js "import" field

- When you import a package, Node.js finds a package folder in the `node_modules`, it looks at its `package.json` to find
  the `exports` field that defines the entry points to the package.

- So exports is used from _without_ the package, to figure out what modules to import inside it.

- When you import a module _within_ a package, you use relative specifiers, e.g `'./other-words/hello.js`.

- Node.js allows a third option - entry points that can be used _within_ a package:

```json
{
  "imports": {
    "#show": "./show-utils/show.js"
  }
}
```

- And using it...

```js
import {show} from '#show'
```

- This option is rarely used, so I'm not going to talk about it more than the above.

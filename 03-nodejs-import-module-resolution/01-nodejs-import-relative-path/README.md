## 01 How does Node.js resolve `import` with relative specifiers?

Reminder: module resolution with relative specifiers is easy - just do URL absolutization based on the current
module URL.

In the browser, bare specifiers (e.g. `p-throttle`) don't work unless an importmap is supplied that maps them
to URLs.

Now we're going to talk about how Node.js does module resolution, and we'll start with relative specifiers:

```js
// index.js
import {show} from './show-utils/show.js'

// show-utils/show.js
export function show(message) {
  console.log(message)
}
```

---

Same as the browser, the final module specifier URL is calculated by resolving the path specifier
with the current URL of the module.

Yes, ESM always deals with URL-s, even if our modules are on the disk. Node.js URL-s don't start with
`http://`, but rather with `file://`, e.g.

```txt
file:///user/giltayar/code/some-dir/some-file.js
```
So relative paths work _exactly_ like in the browser.

This is by _design_ so that code that works in Node.js will work exactly as is in Node.js

# 01 How does module resolution work in the browser for relative paths?

Reminder: module resolution is how we interpret the "specifier" in `import {something} from '*specifier*'`.
This chapter deals with how this interpretation works in the browser.

While importing can also be done with `const {something} = require('*specifier*')`,
the browser doesn't support this. It only supports ESM `import`.

---

The browser supports ESM only if the `<script>` tag comes with `type="module"`:

```html
...
<script type="module" src="./index.js"></script>
...
```

The code:

```js
// index.js
import {show} from './show-utils/show.js'

setInterval(() => show('hello, world'), 500)

// show-utils/show.js
export function show(message) {
  document.getElementById('root').innerHTML += message + '<br>'
}
```

---

Showing the page (you can use `pnpm start` for this), will generate the following HTTP requests, via
the server log we see when we use `pnpm start`:

```log
 HTTP  1/4/2025 9:44:51 AM ::1 GET /
 HTTP  1/4/2025 9:44:51 AM ::1 Returned 200 in 20 ms
 HTTP  1/4/2025 9:44:51 AM ::1 GET /index.js
 HTTP  1/4/2025 9:44:51 AM ::1 Returned 200 in 3 ms
 HTTP  1/4/2025 9:44:51 AM ::1 GET /show-utils/show.js
 HTTP  1/4/2025 9:44:51 AM ::1 Returned 200 in 2 ms
```

The JS files are being requested by the browser via HTTP, and are not accessed directly from the disk.
This makes sense - all resources the browser uses are requested via HTTP!

The `show.js` is being requested by the browser via the URL `http://localhost:3000/show-utils/show.js`.
The `http://localhost:3000` is not shown in the server log.

The module specifier `'./show-utils/show.js'` is called a _relative_ specifier, because the final URL is relative
to the current module being loaded.

Relative specifiers start with either a `.` or `/` (we'll explore specifiers that start with `/` in the exercise).

---

The final URL is calculated by taking the relative specifier - in our case `./show-utils/show.js` - and
absolutizing it with the current module URL - in our case `http://localhost:3000/index.js`.

In our case, this results in `http://localhost:3000/show-utils/show.js`.

You can calculate it using the following Node.js code:

```js
const relativePath = './show-utils/show.js'
const absoluteUrl = 'http://localhost:3000/index.js'

// our example
new URL(relativePath, absoluteUrl).href

//=> http://localhost:3000/show-utils/show.js
```

Absolutization works just like when you determine the final URL of an `<img src>` - you take the URL of the page
and absolutize it with the relative path in `src`.

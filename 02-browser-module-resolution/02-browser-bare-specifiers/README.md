# 02 How do "bare" specifiers work in the browser?

Reminder: module resolution is how we interpret the "specifier" in `import {something} from '*specifier*'`.
This section deals with how this interpretation works in the browser.

We saw that browsers support `import` statements, if the `<script src>` tag also includes a `type="module"` attribute.

We saw that browsers interpret the specifier in `import {something} from './some/relative/path.js` by
absolutizing the URL from the current module's URL, and then HTTP GET-ing it.

---

## Module specifiers as HTTP URL-s

Let's discuss the following:

```js
import {show} from './show-utils/show.js'
import throttle from 'https://esm.sh/p-throttle'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}
```

---

## This works! How?

If we browse to <https://esm.sh/p-throttle>, we'll see that it redirects to <https://esm.sh/p-throttle@7.0.0>
(or whatever latest version there is at this time), and shows us JavaScript akin to this:

```js
export * from "/v135/p-throttle@7.0.0/es2022/p-throttle.mjs"
```

And if we do module resolution like the browser and browse to
<https://esm.sh//v135/p-throttle@7.0.0/es2022/p-throttle.mjs>, we get the `p-throttle` code.

And this is exactly what the browser does.

## What is esm.sh?

The site "esm.sh" is a wonderful site that serves all npm packages in the npm registry so that they
can be used in the browser. It even transpiles the CommonJS to ESM so that even packages that are CommonJS
and should not work in the browser, do.

---

## Bare specifiers

But what about this code:

```js
import {show} from './show-utils/show.js'
import throttle from 'p-throttle'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}
```

This code imports the bare specifier `p-throttle`. It's a "bare specifier" because it is bare of any hint
of how to resolve the specifier to a module. So the browser doesn't know how to resolve this specifier,
and we get the error
`TypeError: Failed to resolve module specifier "p-throttle". Relative references must start with either "/", "./", or "../"`.

Spoiler: Node.js looks in `node_modules` directory for packages. Why don't the browsers? Well, they don't. Just
like with extensions in relative specifiers, browsers don't try to "guess" where the package is. Either they know
the full URL or they dont.

---

But we can give browsers a hint using **import maps**.

```jsx
<script type="importmap">{
	"imports": {
		"p-throttle": "https://esm.sh/p-throttle@@7.0.0"
	}
}</script>
```

Add this before the `<script src>` and the bare specifier now works!

There is more in how `importmap` works, but I won't delve into that in this course.

# 01 Introduction to bundlers

- Browsers know how to deal with JavaScript imports. Thus, the following code works in the browser:

```html
<script type="importmap">
  { "imports": { "p-throttle": "./node_modules/p-throttle/index.js" } }
</script>
<script type="module">
import {show} from './show.js'
import throttle from 'p-throttle'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}
</script>
```

- But we mostly don't use this ability of the browser to import natively!
  Rather, we use a bundler to transform this code into something like this:

<script type="module">
// from ./show.js
function show(message) {
  console.log(message)
}

// from p-throttle
function throttle(...) {

}

// main code
const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}

</script>

- The bundler concatenates all the modules together
  and glues them with some kind of glue code that replaces the imports/exports

- Let's see how it with Vite, a very popular bundler.

- We install it via `pnpm add --save-dev vite`.

- We build the bundle with `vite build .`, where `.` is a directory that has the `index.html`.

- Vite searches for `<script>` or `<script src>` tags and recursively travels down the `import`-s and `require`-s
  to find all the modules that are used by the scripts.

- Vite bundles them into one big `.js` file and creates an HTML file that loads this `.js`.

- Serving this HTML will deliver the same experience as the original code,
  but with the browser needing to do no `import`-s.

- Why bundle?

- If we didn't, each app would have created hundreds of requests - one for each module that is imported.

- Most packages in NPM are not ESM (they're CommonJS), and so cannot be used in the browser.
  And of those that are, many are "False ESM" that don't have extensions in their import specifiers,
  and so cannot be used natively in the browser.

- Bundlers enable "importing" CSS and images, of which we won't talk about here, but are used
  extensively in frontend development.

- Bundlers support optimizing the output JS via optimizations like minification of JS and "chunking".

# 01 Introduction to Bundlers

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

- But we mostly don't use this functionality. Rather, we transform this code into something like this:

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

- Let's see it with Vite, a very popular bundler these days

- Why bundle?

  - If we didn't, each app would have had hundreds of requests

  - Most packages in NPM are not ESM (they're CommonJS). And those that are, some are "Faux ESM"

  - It enables weird thinks like "importing" CSS and "importing" images

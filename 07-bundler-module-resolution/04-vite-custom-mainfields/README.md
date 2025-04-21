# 04 Custom "Main" Fields

- Just like I can specify a custom condition, I can also specify alternative fields to `main`:

```json
// node_modules/show/package.json
{
  "browser:next": "./dist/show.js"
}
```

- This is relevant for non-modern package, those that were written in the days of Webpack and Browserify.

- Modern packages should use `exports`.

- The default for these is `module`, `browser`, `jsnext:main`, and `jsnext`, which should be good for all
  those legacy NPM packages, but sometimes there are packages that don't subscribe even to these "main" fields.

- So usually you don't need to touch this option `resolve.mainFields`. But if you do...:

```js
import {defineConfig} from 'vite'

export default defineConfig({
  ...,
  resolve: {
    mainFields: ['browser:next'],
  }
})

```

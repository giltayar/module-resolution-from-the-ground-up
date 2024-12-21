# Custom "Main" Fields

- Just like I can specify a custom condition, I can also specify alternative fields to `main`.

- This is relevant for non-modern package, those that were written in the days of Webpack and Browserify.

- Modern packages should use `exports`.

- The default for these is `module`, `browser`, `jsnext:main`, and `jsnext`, which should be good for all NPM packges

- So usually you don't need to touch this option `resolve.mainFields`.
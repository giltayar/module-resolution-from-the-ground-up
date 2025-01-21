## 02 How does Node.js resolve `import` with bare specifiers?

Reminder: module resolution with relative specifiers is easy - just do URL absolutization based on the current
module URL.

In the browser, bare specifiers (e.g. `p-throttle`) don't work unless an importmap is supplied that maps them
to URLs.

How do bare specifiers work in Node.js? Bare specifiers are used for **packages** in Node.js, for example:

```js
// some-file.js
import throttle from 'p-throttle'
```

Here we're trying to import the package `p-throttle`.

Node.js doesn't (yet!) support importmaps. What it does support is looking for the package directory in the
`node_modules` directory, because that is where `npm install` installs them.

---

1. Node.js looks in the current directory of the current file for a `node_modules` directory.

   - It's not there? Look one directory above (all the way to the root of the filesystem), recursively, till it finds it.

   - If it doesn't find it, throws an error

1. Once found, look for a directory with the name of the package.

   - Not there? Continue up the directories like above

   - Not found a directory with the name of the package in any `node_modules`? Throw an error.

1. The directory contains either an `index.js` file that is the module we're looking, or a `package.json` with
   information on which file to use.

   - Not there? throw an error.

---

In our example:

```
- <some-dir>
  - node_modules/
    - p-throttle/
      - index.js
  - some-file.js
```

The `import 'p-throttle'` in `<some-dir>/some-file.js`
resolves to `<some-dir>/node_modules/p-throttle/index.js`.

---

If `some-file` would have been in a sub-directory, e.g.

```
- <some-dir>
  - node_modules/
    - p-throttle/
      - index.js
  - subdir/
    - some-file.js
```

The `import 'p-throttle'` in `<some-dir>/subdir/some-file.js` still
resolves to `<some-dir>/node_modules/p-throttle/index.js` because Node.js continues up the directory tree
till it finds `node_modules` with the package directory inside it.

We've seen what it does with `index.js` in the package. In the next sections, we'll see what it does with the
`package.json`.

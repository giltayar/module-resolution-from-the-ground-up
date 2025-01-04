## 02 How does `require` module resolution works for bare specifiers?

- Module resolution for Node.js relative paths is much more complicated in `require` than in `import`.

- In `import` it works like in the browser - just absolutize the path and look for the file.

- But while this is also true in CommonJS, in CommonJS it also works without the file extension:

  - By guessing the extension from a list of known extensions, e.g. `.js`, `.cjs`, ...

  - By looking inside a directory with that name

- For bare specifiers, there is actually no difference from `import`!

  - Looks up the directorys for a `node_modules` directory with the same name as the bare specifier

  - In it, there's either an `.index.js` file or a `package.json` with `main` or `exports` fields

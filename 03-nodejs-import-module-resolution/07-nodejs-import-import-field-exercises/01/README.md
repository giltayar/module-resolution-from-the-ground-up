# Exercise #1

Running `index.mjs` should output

```txt
hello world
```

But instead fails to import the files.

1. Run `pnpm install` to install dependencies.

1. Run `node index.mjs` and watch it fail to import.

1. Fix this by _only_ change the `.js` files! Don't touch those `package.json`-s!

---

Hint:

- For each file, look up the directory tree and find its `package.json` to figure out whether it should be
  ESM or CommonJS

- Once you know that, check that maybe an ESM file exports using CommonJS syntax, and a CommonJS file exports
  using ESM syntax.

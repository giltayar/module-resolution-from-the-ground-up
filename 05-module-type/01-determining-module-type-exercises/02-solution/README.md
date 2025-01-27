# Exercise #2

Running `index.mjs` should output

```txt
hello world
```

But instead fails to import the two packages - `hello` and `world`.

1. Run `pnpm install` to install dependencies.

1. Run `node index.mjs` and watch it fail to import those packages.

1. Fix this by _only_ change the `package.json` files of the packages

---

Hint:

- For each package, check to see the syntax the files use, and modify the
  `package.json` with the appopriate `type: module/commonjs`.

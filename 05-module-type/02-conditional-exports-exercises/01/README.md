# Exercise #1

Running `node index.js` should output:

```txt
hello world world
```

But instead fails to `require` the `hello-world` library. If you look at `index.js,
you will notice that the `hello-world`library
(which is in`node_modules`) needs to be both `import`-ed and `required`,
and thus needs to be dual-mode.

1. Run `pnpm install` to install dependencies.

1. Run `node.index.js` and watch it fail to require the `hello-world` library.

1. Fix this! In `node_modules/hello-world`,
   create the CommonJS equivalent to the ESM files in `src` and modify the `package.json`
   to add conditional imports to point to both the ESM and CommonJS modules.

1. Bonus: create dual mode files via two methods:

   - Creating CommonJS `*.cjs` files for each ESM `*.js` file (easier)

   - Creating a CommonJS `src-cjs/*.js` file for each ESM `src/*.js` (harder)

---

Hint:

- Copy the `index.js` file to `index.cjs`

- Modify the package JSON to have both `import` pointing to both `index.js` for `import`
  condition and `index.cjs` for `require` condition

- Modify the `index.cjs` file to use `require` to import the `reverse.js`.

- Add another entry point in the `package.json` for `hello-world/reverse`.

- Make this entry point also dual-mode via `import` and `require` conditions.

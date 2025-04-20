# Exercise #1

Running `index.js` should output

```txt
hello
world
wow!
```

But instead fails to import two packages - `hello`and `world`, which should be doing the output.

1. Run `pnpm install` to install dependencies.

1. Run `node index.js` and watch it fail to import `hello`.

1. The packages `hello` and `world` exist in `node_modules`, but don't have the appropriate information
   in their `package.json` to make them work.

1. Fix this! Use the `exports` field.

---

Hint:

- The `exports` field needs to have `./` in the beginning of the path to work.

- Because `exports` blocks other entry points, the `world/wow` bare-specifier needs the special `exports` that
  specifies multiple entry points.

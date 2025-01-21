# Exercise #1

Running `index.js` should output

```txt
hello world
world
```

But instead fails to import two packages - `hello`and `world`, which should be doing the output.

1. Run `pnpm install` to install dependencies.

1. Run `node index.js` and watch it fail to import `hello`.

1. Create the missing packages so that the two imports (to `hello` and to `world`) will output each the appropriate
   line to the console.

---

Hint:

- We're used to adding packages via `pnpm install`, but nothing stops you from creating the dirctories manually!

- The modules `hello` and `world` that you create shouldn't export anything. They just need to `console.log`
  the appropriate strings.

- Remember what the names of the file in each package should be to make Node.js find them?

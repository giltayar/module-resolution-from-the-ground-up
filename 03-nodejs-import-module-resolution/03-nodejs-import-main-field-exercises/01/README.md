# Exercise #1

Running `index.js` should output

```txt
hello
world
```

But instead fails to import two packages - `hello`and `world`, which should be doing the output.

1. Run `pnpm install` to install dependencies.

1. Run `node index.js` and watch it fail to import `hello`.

1. The packages `hello` and `world` exist in `node_modules`, but don't have the appropriate information
   in their `package.json` to make them work.

1. Fix this!

Hint:

- The packages don't have `index.js` files in them. While you _could_ rename their files to `index.js`, a better
  way to do it is to add something to the `package.json`.

# Exercise #1

Running `index.js` should output

```txt
hello world
hello world
hello world
hello world
hello world
```

But instead fails to import the imports that start with `#`.

1. Run `pnpm install` to install dependencies.

1. Run `node index.js` and watch it fail to import imports that start with `#`.

1. Fix this! Create the correct `imports` field in `package.json` so that those imports work

Hint:

- You have two kinds of imports - those that point to relative paths inside the package (`#hello` and `#world`),
  and those that point to another package (`#throttle`)

- The files `hello.js` and `show.js` are in the `words` directory

- The package to be used is the usual `p-throttle`.

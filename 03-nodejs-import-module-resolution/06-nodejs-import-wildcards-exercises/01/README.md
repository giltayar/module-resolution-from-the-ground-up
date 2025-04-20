# Exercise #1

Im the following exercise, running `node index.js` should output the following, but doesn't
(the `.` signify spaces):

```txt
...abc....
.......def
.......ghi
........yz
```

1. Run `pnpm install `as usual.

1. Run `node index.js` and see it fails in the imports.

1. Fix it. You should use wildcard exports.

1. Run it again to see the correct output.

Hint:

- The first import that fails is to `string-algos/algo/center-string`. Where does it look for the package
  `string-algos`?

- Look in `node_modules/string-algos`. What should be written in the `package.json`?

- You can use the `exports` to export `./algo/center-string` to `./src/center-string.js` but notice that the
  two other imports follow the same pattern.

- Use "wildcard" exports to create one `exports` line that uses wildcards for all three entry points.

- When running `node index.js` you may still encounter an error. Something about the fact that CommonJS \
  modules don't support `export`.

- Why does Node.js think `center-string.js` is CommonJS?

- How does it determine whether a file is CommonJS or ESM?

- It uses the file extension. `.js` is by default CommonJS.

- How do we make Node.js map `.js` to ESM?

- Using `"module": "type"` in the `package.json`.

- Run `node index.js` again and it should work.

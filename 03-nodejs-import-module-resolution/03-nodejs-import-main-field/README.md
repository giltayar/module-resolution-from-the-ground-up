## 03 How does Node.js use `package.json`'s `main`?

- So we've seen how Node.js looks for bare specifiers - part of the algorithm goes looking in the `node_modules` folder with the same name as the package, and looking for the `package.json` in there.

- Node.js will look in the `main` field and the `exports` field. `exports` wins if it exists.

- If only `main`, it will use that relative path to find the file.

- Why are there two fields? Well, as we'll see `exports` is MUCH more complicated and interesting than `main`.

- But let's look at `main`

- `main` is where Node.js looks for the entry point if you just write the name of the package as a bare specifier (e.g. `hello`).

- But you can also "deep link" into the package, and write `hello/other-words/world.js`, and it will still work by ignoring `main`!

- Nothing stops us from accessing any file we want in the package.

- This is not good, and to block this, we need to use the `exports` field

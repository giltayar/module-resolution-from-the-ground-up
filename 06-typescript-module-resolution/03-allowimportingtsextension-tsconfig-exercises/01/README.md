# Exercise #1

The directory includes `.mts` and `.ts` files in `src` that need to be typechecked and also need to run
using Node.js's support for TypeScript.

1. Run `pnpm install` to install dependencies.

1. Run `pnpm start` (which runs `index.mts` using Node.js's TypeScript support)
   and see it fail.

1. Fix it!

1. Run it again and see it output `Hello, world`

1. Now run `pnpm test` and see that TypeScript typechecking fails on the import to `hello.ts`

  - It is interesting to note that Node.js runs the program without any problem and yet TypeScript fails!

  - This is because Node.js only does type stripping and not full typechecking

1. Fix it via the `tsconfig.json`.

1. Run `pnpm test` to see it show no errors.

---

Hint:

- Why does Node.js say that `hello.ts` does not export `hello`? Look at the `hello.ts` to verify that it does
  indeed have the `hello` export.

- Maybe it thinks that the file is not an ESM file? How does it know that it is an ESM file?

- Node.js knows it by the extension. If the extension is `.ts` (which corresponds to `.js`) then where does it look
  to see whether the file is ESM or CommonJS?

- The `package.json` option `module`!

- Fix it by making `module` say that `.js/.ts` files are ESM.

- Now `pnpm start` should work.

- Let's make `pnpm test` work. Why does it give that error?

- Actually, the hint is there in the error message.

- Fix the `tsconfig.json` as instructed in the error message.

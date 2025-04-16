# Exercise #1

The directory has a CLI written in TypeScript that outputs the string "Hello, world".

The code is written in TypeScript so it needs transpiling.

1. Run `pnpm install` to start

1. Run `pnpm run build` to transpile the `.ts` files

1. Run the transpiled code via `node dist/index.js`.

1. It fails.

1. Fix it by only touching configuration files!

---

Hint:

- The import to `./hello` fails.

- What is the `moduleResolution`? Look in the `tsconfig.json`.

- `moduleResolution: nodeNext` does not support extensionless imports that try and "guess" the extension to be `.js`.

- But `moduleResolution: bundler` does support it.

- When you change the `moduleResolution` to `bundler` another error pops up. Can you fix it?

- Fix it by changing the `module` to whatever it says there.

- Run the build again. It should work.

- Running the code fails.

- What does the error say?

- It says the `dist/index.js` cannot find `dist/hello`.

- True, given that TypeScript transpiled `hello.ts` to `dist/hello.js`.

- We can rename the file after the build using the Unix command `mv`.

- Put the correct command that renames `dist/hello.js` to `dist/hello`
  inside the `build` script in the `package.json`.

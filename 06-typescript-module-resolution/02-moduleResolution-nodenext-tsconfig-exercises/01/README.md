# Exercise #1

The directory includes `.ts` files in `src` that need to be transpiled to `.js`. Running
`pnpm run build` should do that, but instead fails with a TypeScript error.

1. Run `pnpm install` to install dependencies.

1. Run `pnpm run build` to see it fail.

1. Fix this! After fixing it, you should:

1. Run `pnpm run build` succesfully.

1 Run `pnpm start` to start the server that serves the HTML with the transpiled `.js` files
  in `dist`.

1. Navigate to <http://localhost:3000> and and see an inifinite scrolling "Hello, world"
   happening

---

Hint:

- Look at the `moduleResolution` in `tsconfig.json`. We learned what it means.

- Fix the module specifier in `index.ts` to conform to the resolution determined by `moduleResolution`.

# Exercise #2

This is a more difficult exercise, which actually only indirectly
touches on `moduleResolution` in the `tsconfig.json`, but does need understandings we already talked
about in previous lessons.

The directory includes `.ts` files in `src` that need to be transpiled to `.js`. Running
`pnpm run build` should do that, but instead fails with a TypeScript error.

1. Run `pnpm install` to install dependencies, then `pnpm run build` to transpile `.ts` to `.js`.

1. Run `pnpm start` to start the server that serves the HTML with the transpiled `.js` files.

1. Navigate to <http://localhost:3000> and see a blank page.

1. Fix this! After fixing it, you should:

1. Run `pnpm run build` again.

1 Run `pnpm start` to start the server.

1. Navigate again to <http://localhost:3000> and and see an inifinite scrolling "Hello, world"
   happening

---

Hint:

- Open the console in Devtools. What do you see? Probably something like `ReferenceError: exports is not defined`. Why?

- Look in the Network tab at the response to `index.js`. Does that make sense in a browser app?

- The `require` in `index.js` is not supported by browers (only Node.js, as we learned).

- From where is the `index.js` served from? Look in the `index.html` to see.

- The `index.js` is served from the `dist` folder, and if you look there you can see that it has the bad `require`

- Who created this `index.js` and why is it using `require` and not `import`?

- TypeScript created it. But why is it using `require`? Because it thinks the file `index.ts` is a CommonJS file.
  Why?

---

- Well, what module resolution is it using? Node's! It looks at which file it will create (`./dist.js`)
  and determines via the Node's module resolution that it is CommonJS.

- Let's try and remember from Node's resolution algorithm why it thinks it is CommonJS.

- Hint: See lesson 01 ("Determining module type") in chapter 05 ("Module type")

- If the extension is `.js` then it is CommonJS unless there is a `type: "module"` in the `package.json`.

- What is written in the `package.json`?

- No `type: "module"` in it!

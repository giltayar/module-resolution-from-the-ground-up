# Exercise #1

The web app created here using Vite should show a blank page where 5 "hello world" appear
in intervals of half a second.

1. Run `pnpm install` as usual

1. Run `pnpm run build` to have Vite create the `dist` directory with the bundle

1. Run `pnmp start` to serve the `dist` directory

1. Navigate to <http://localhost:3000>

1. You will get a blank page

1. Fix it to make it work

   - Note the file `index.ts` that includes the code for the page

1. When importing `show.ts`, try using `show`, `show.ts`, and `show.js`. This will help you understand that the
   bundler module resolution accepts all of these options.

---

Hint:

- Look at the network. Does it include an HTTP GET to `index.js` or something similar?

- It does not? Is it built? Look in `dist/assets`.

- It is not! Why?

- Notice that `index.html` does not include a `script` to `index.ts`.

- Include it and continue

- Don't forget to rebuild because you changed `index.html`

- It still doesn't work. Why?

- Did you look in the console?

- Ahh... the brower can't find `show`. Look in `index.ts` and see if you can spot the bug.

- Yes, `show` is not import it.

- Import it, rebuild, serve and navigate

# Exercise #1

The result of this is a web page that shows the string `hello world` rotated:

```txt
hello world
ello worldh
llo worldhe
lo worldhel
o worldhell
```

Unfortunately, it doesn't work.

1. First, `pnpm install` to start.

1. Then run `pnpm run build` to generate the `dist/index.js` (from `src/index.ts`) that will be
   served by `index.html`.

1. You will get an error on the bare specifier `rotate-string`.

1. Fix it by fixing the package `rotate-string` that is in `node_modules`. Touch only configuration files and not
   source files.

Note that the fix here relies not only on what you learned in this lession,
but things you learned about TypeScript/Node.js resolution of packages.

1. Once `pnpm run build` passes and a `dist/index.js` is generated, you can continue running.

1. Run `pnpm start` and navigate to <http:localhost:3000>.

1. You will see a blank page.

1. Fix the problems in the page.

Note that the fix here relies not so much on what you learned here,
but things you learned about browser resolution.

---

Hint:

- Fixing the TypeScript error:

- As you saw, it couldn't find the module `rotate-string`. This means that the module resolution didn't work.
  Why? Check the `moduleResolution` in the `tsconfig.json` to see what algorithm it uses for module resolution.

- The `tsconfig.json` says that the `moduleResolution` is `nodenext`,
  which means TypeScript is using the Node.js module resolution. How does Node.js resolve `rotate-string`?

- It looks in the directory `node_modules/rotate-string` for an `index.js`. Is it there?

- Nope. The source code is `rotate.js` and it is in `dist`.

- Given that you can't move or rename `rotate.js`, you will have to figure out a way for Node.js to find the file.

- Use the `exports` in a `package.json` to point it to `dist/rotate.js`.

- Now run `pnpm run build` again. Now it says that it can find the module, but can't find the type information.

- Create a `rotate.d.ts` in the `dist` folder of `rotate-strings` and point the `types` condition in the `exports`
  to this file.

- Running `pnpm run build` again should work now.

- Fixing the HTML page:

- Look at the console. It says that it can't find `rotate-strings`. Why? Remember what you learned about
  browser resolution of bare specifiers.

- You need to tell the browser where `rotate-strings` is located using an `importmap`.

- Create an `importmap` in the `index.html` and make it point `rotate-strings` to the correct file.

- Make it point to the path `./node_modules/rotate-strings/dist/rotate.js`.

- Refresh the page. Now the problem is in `p-throttle`.

- Modify the `importmap` to also point `p-throttle` to the correct file inside the package.

- It should run well now.

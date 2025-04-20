# Exercise #1

This is a web app that shows stuff 5 times at intervals. What it shows depends on the custom condition it was built
with Vite.

Your ultimate goal is to build the app and run `pnpm start` twice, each time getting a different output.

The first time, just building and then running `pnpm start` will generate:

```txt
at home tv 🏠
at home tv 🏠
at home tv 🏠
at home tv 🏠
at home tv 🏠
```

The second time you build it, add the custom condition `kitchen`,build and run it, and
you should get:

```txt
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
```

1. Run `pnpm install` to start the whole thing

1. Run `pnpm run build` to build the app using Vite.

1. You get errors. Fix them by creating the package `stuff` in `node_modules` with what is needed for this to pass.

   1. The enum `Stuff` should be `'sofa' | 'bed' | 'table' | 'tv'`. Note that it can only be declared in the `.d.ts`.

   1. Write the package so that the output of `index.ts` generates the first output as shown above.

   1. To output a string in the code,
      you can use `document.getElementByUd('root').innerHTML += text + '<br>'`.

1. Run the transpiled code using `pnpm start`. It should work.

1. Now change the `tv` in `index.ts` to be `dishwasher`. You should see an error in the code.

1. Add a custom condition in the `vite.config.ts` to add a custom condition named `kitchen`.

1. Run `pnpm run build` and see it fail

1. Change the `stuff` package (only by _adding_ code and stuff in `package.json`) to support the `kitchen` condition

  1. The enum `Stuff` should be `dishwasher' | 'stove' | 'coffee machine' | 'tv'`

  1. Write the additions so that the output of the app generates the second output as shown above.

1. Run `pnpm run build` again. It should be OK.

1. Run `pnpm start` and it should output the second output.

---

Hints:

This is a difficult exercise that uses much of the stuff we learned in the previous lesson.
Try doing it by yourself!


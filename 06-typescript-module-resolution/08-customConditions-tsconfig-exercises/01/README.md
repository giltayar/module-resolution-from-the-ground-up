# Exercise #1

`index.ts` is a command line that prints stuff 5 times. What it prints depends on the condition sent to it via
Node.js and TypeScript.

Your ultimate goal is to create and run `node dist/index.js` twice.

The first time, just building and then running `node dist/index.js` will generate:

```txt
at home tv 🏠
at home tv 🏠
at home tv 🏠
at home tv 🏠
at home tv 🏠
```

The second time you build by uncommenting the custom condition in `tsconfig.json`,
changing `index.ts` to show `dishwashwer`, and running with `node dist/index.js`,
you should get:

```txt
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
in the kitchen dishwasher 🍴
```

1. Run `pnpm install` to start the whole thing

1. Run `pnpm run build` to run TypeScript transpilation on `index.ts`.

1. You get errors. Fix them by creating the package `stuff` in `node_modules` with what is needed for this to pass.

   1. The enum `Stuff` should be `'sofa' | 'bed' | 'table' | 'tv'`. Note that it can only be declared in the `.d.ts`.

   1. Write the package so that the output of `index.ts` generates the first output as shown above.

1. Run the transpiled code using `node dist/index.js`. It should work.

1. Now change the `tv` in `index.ts` to be `dishwasher`. You should see an error in the code.

1. Uncomment the `customCondition` line in `tsconfig.json` to add a custom condition named `kitchen`.

1. Run `pnpm run build` and see it fail

1. Change the `stuff` package (only by _adding_ code and stuff in `package.json`) to support the `kitchen` condition

  1. The enum `Stuff` should be `dishwasher' | 'stove' | 'coffee machine' | 'tv'`

  1. Write the additions so that the output of `index.ts` generates the second output as shown above.

1. Run `pnpm run build` again. It should be OK.

1. Run `node --conditions=kitchen ./dist/index.js` and it should output the second output.

---

Hints:

This is a difficult exercise that uses much of the stuff we learned in the previous lesson.
Try doing it by yourself!

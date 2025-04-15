# Exercise #2

The directory includes `.mts` and `.ts` files in `src` that need to be typechecked and also
need to be transpiled into the `dist` directory.

1. Run `pnpm install` to install dependencies.

1. Run `pnpm run build` (which run TypeScript to transpile the files to the `dist` director)
   and see it fail.

1. Fix it!

1. Run it again and see it succeed and create the `.js` files in `dist`

1. Now run `pnpm start` to see that the files in `dist` actually run. They should.

---

Hint:

- When running `pnpm run build`, the error clearly indicates what to add to `tsconfig.json`. Do this.

- Now when you run `pnpm run build` you still get an error. It says that it can't emit the file.

- Remember what we said in the lesson about TypeScript not wanting to change the import file extension.

- Check what option to add in `tsconfig.json` to enable TypeScript to rewrite the import file extension.

- Change the `tsconfig.json` accordingly.

- Ensure that `pnpm run build` works now.
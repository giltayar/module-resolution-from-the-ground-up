## 05 The `module` option `tsconfig.json`

- We've seen a lot of lessons on the `moduleResolution` option in `tsconfig.json`.

- This option has a "sibling" option that is closely tied to it: the "`module`" option.

- The `module` option describes how TypeScript _transpiles_ the `import`s and `require`s.

- For example, you may want to use `import` in your TypeScript code, but transpile it to CommonJS `require`.

- Lots of legacy options that we won't cover (`umd` anyone?), but we will cover the following:

## `nodenext`

- This option transpiles to `import` or to `require` based on what the file should be according to Node.js
    module resolution rules.

- If there is no `moduleResolution` option, then the module resolution is `nodenext`.

- Use this for all future projects, as it will enable code that works both in the browser, in bundlers, and
  in Node.js.

## `preserve`

- `preserve`: doesn't touch the import or require. Preserves what is there.

- If there is no `moduleResolution` option, then the module resolution is `bundler`.

- Use this option in frontend code where you haven't migrated to extensionless import specifiers.

## `commonjs`

- `commonjs`: transpile all `import`-s to `require`

- Implies `moduleResolution: node10`, which is a very old module resolution algorithm that existed
  for a very short time in Node.js.

- Don't. Just don't.

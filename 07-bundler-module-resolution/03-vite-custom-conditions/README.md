# Custom Conditions

- Just like in TypeScript, you can specify additional conditions besides the regular `import` and `require`.

- Can be used, as an example, in monorepos where we want to work immediately with the source code, by having a
  `source` condition that points to the TypeScript files

- Defined by the `vite.config.ts` option `resolve.conditions`.


# Custom Conditions

- When resolving a package entry point, TypeScript, just like Node.js, will use the `exports` field in `package.json`.

- When there are conditional exports, it will use the `import` condition to find them when
  the code uses `import` and the `require` condition when the code uses `require`.

- But what if we want a custom condition? We can do that using the TSConfig `customCondition: true`.

# Custom Conditions

- Just like in TypeScript, as we learned in chapter 06 ("Typescript module resolution")
  lesson 08 ("custom conditions") you can specify additional conditions besides the regular `import` and `require`.

- Defined by the `vite.config.ts` option `resolve.conditions`:

```js
export default defineConfig({
  ...,
  resolve: {
    conditions: ['source'],
  }
})
```

- Let's look at a package that uses the `source` condition:

```json
{
  "exports": {
    ".": {
      "source": "./show.ts",
      "import": "./dist/show.js"
    }
  }
}
```

- Because we have the `source` condition, which the package `show` uses, we get the `show.ts` file and not
  the `dist/show.js` file.

- Because Vite transpiles the `show.ts`, it works well.

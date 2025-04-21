# 02 Vite module resolution

- Vite and other bundlers use a module resolution that we already saw that TypeScript supports - `bundler`.

- This module resolution supports code like this:

```html
<!-- index.html -->
    <script type="module">
      import {show} from './show'

      // ...
    </script>
```

- This module resolution will "guess" the extension needed.
   In our case, it doesn't find `show.js`, but rather `show.ts`:

```ts
// show.ts
export function show(message: string) {
  document.getElementById('root').innerHTML += message + '<br>';
}
```

- Note that the bundler will transpile `show.ts` to JavaScript, even though we haven't installed TypeScript
  in the directory.

  - Also note that `show.ts` includes errors (`document.getElementById(..)` might be `null`), but Vite
    ignores them.

  - This is because Vite _strips the types_, but does not do type checking.

- The `bundler` module resolution algorithm is basically the Node.js CommonJS module resolution, but used also
  when the module is `imported` and ESM. It also adds the ability to deal correctly with TypeScript files.

- We've already seen this module resolution algorithm in TypeScript. Actually, the `moduleResolution: bundler`
  option was added _because_ it was used in bundlers.

- The `bundler` module resolution is an interesting one - it enables you write "Faux ESM", as we described
  in the "TypeScript" chapter. Why did we call it "False ESM"?
  Because the ESM you write can't run natively in the browser or in Node.js,
  and can only be used via bundling or transpiling.

- Historically, the `bundler` module resolution came before TypeScript.
  It was created before Node.js had ESM and before browsers had ESM.
  All we had was CommonJS, so that when transpilers like Babel transpiled the `import`,
  they transpiled it to `require`. Thus it made sense to use the CommonJS module resolution algorithm.

- Today this module resolution doesn't make any sense, but history is hard to shake off.

- Even if Vite and other bundlers support the "bundler" module resolution, you can still use "true ESM" by
  specifying the extensions in the import specifiers.

- Why would we prefer this? Because in these days, our code doesn't run only in the browser.
  It might also be running in Node.js or other environments that don't support "False ESM".

# Finding the types in bare specifiers

- In the previous lesson we saw that TypeScript doesn't need a `.ts` to get the type information.
  It can use an accompanying `.d.ts` file to understand the type information of the `.js` file:

```ts
// index.ts
import {hello, world} from './hello.js'

console.log(hello, world)

// hello.js
export const hello = 'Hello';
export const world = 'world';

// hello.d.ts
export declare const hello: string;
export declare const world: string;
```

- In an app, we always have our `.ts` file, so this use of `.d.ts` files isn't very important. So this mechanism
  in relative specifiers isn't really useful.

- But when using packages, e.g. `import {hello} from 'hello'`, this _is_ important, because packages
  are distributed via JavaScript code and not TypeScript code. This means that the package MUST also distribute
  the accompanying `.d.ts` files.

- How does it do this? Let's look at the `hello` package in `node_modules`:

```ts
// hello.js
export const hello = 'Hello';
export const world = 'world';

// types.d.ts
export declare const hello: string;
export declare const world: string;
```

- Similarly to the previous lesson, we've created a package that has both the `.js` files to run and the `.d.ts`
  file to supply TypeScript with the package's type information.

- If we run the build, we will get an error that says that `hello` does not get any type information:

```sh
$ tsc

index.ts:1:28 - error TS7016: Could not find a declaration file for module 'hello'.
'.../node_modules/hello/hello.js' implicitly has an 'any' type.
```

- TypeScript does not understand that the `types.d.ts` is the type information file for `hello.js`.

- Renaming `types.d.ts` to `hello.d.ts` works, but sometimes this is just not possible because of the build
  process that created the `hello` package.

- An alternative is to use the `types` condition.
  When resolving the _module_ of a bare specifier, TypeScript uses the regular `import` or `require` condition
  as we saw in section 05 ("module type") lesson 02 ("conditional exports").

- When resolving The _`.d.ts`_ of a bare specifier, TypeScript resolves it using the `types` condition:

```json
{
  "exports": {
    ".": {
      "types": "./types.d.ts",
      "import": "./hello.js"
    }
  }
}
```

- Adding this to the `package.json` makes the build succeed.

- And just like `exports` has `main` as a legacy field for module resolution,
  so `exports` has `types` as a legacy field for type resolution:

  ```json
  {
  "type": "module",
  "types": "./types.d.ts",
  "exports": {
    ...
  }
}

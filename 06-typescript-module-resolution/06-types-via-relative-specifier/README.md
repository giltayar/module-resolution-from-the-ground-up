# 06 Finding the types in relative specifiers

- TypeScript needs module resolution not only for the `.js` file, but also for types, i.e. for `.d.ts` files.

- What are `.d.ts` files? These are files that contain _only_ type information of a certain module.

- Why would TypeScript need them? In case there are no `.ts` files, and there is only the transpiled files.

- Let's look at an example:

```ts
// index.ts
import {hello, world} from './hello.js'

console.log(hello, world)

// hello.js
export const hello = 'Hello';
export const world = 'world';
```

If we try and transpile these files we get:

```
error TS7016: Could not find a declaration file for module './hello.js'
```

- Because we are using `strict: true` in the `tsconfig.json`, TypeScript is telling us it can't continue because
  it doesn't have type information for the `hello.js`.

- We could, of course, translate this file to `.ts` and it would work, but sometimes we can't do that or
  don't want to do that. In the next lesson we'll see a case where we can't do that, but let's assume in this case
  that `hello.js` is a huge file that we copy/pasted from from somewhere and we don't want to translate it to `.ts`.

- The other option is to create a `hello.d.ts` that includes the type information:

```ts
// hello.d.ts
export declare const hello: string;
export declare const world: string;
```

- Now if we transpile then TypeScript will emit no errors.

- The syntax of `.d.ts` files does not concern us in this lesson, but _how_ TypeScript figures out where the
  `.d.ts` files are _is_ important.

- Module resolution is simple - if module resolution finds a `.js` file, it will search in the same folder
  with a file with the same name that ends with `.d.ts`.

## Implementation detail

- Given that there is no `hello.ts` file, then TypeScript won't create a `dist/hello.js` so if we leave the build
  as is, the `index.js` won't work.

- To deal with this and make `index.js work`, we also copy the `.js` file to `dist` via `cp *.js dist/`
  as part of the `build` script in the `package.json`.

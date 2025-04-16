# Exercise #1

The directory includes `.ts` files that need transpiling.

1. Run `pnpm install` to start

1. Run `pnpm run build` to transpile the `.ts` files

1. You will get an error that says that the `hello.js` does not have a declaration file.

1. Fix it by creating a declaration file for `hello.js`

## Small tutorial for declaration file syntax.

1. Take the variable or function as it is written in typescript
   and remove the initializer of the variable or the body of the function.

1. Add `declare` at the beginning of the line.

1. If you want to export the declaration, add an `export` before the `declare`.

## Sample `.d.ts` file to help understand `.d.ts` syntax

```ts
declare type User = {name: string, address: string}

export declare function printUser(user: User): void;

export declare const sampleUser: User;
```

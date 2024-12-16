# TypeScript Module Resolution

## 01 Introduction

- TypeScript is a superset of TypeScript

- Runtimes don't really understand TypeScript

- We need to transpile it!

  ```mermaid
  flowchart LR
      hello.ts --> dist/hello.js
  ```

- This is what TypeScript does. But it does more.

- Let's look at `index.ts`:

  ```typescript
  import { hello } from './hello.js';

  console.log(hello);
  ```

- TypeScript does three things in the `import` statement

  1. Resolves the module specifier `./hello.js` to a file path

  1. Transpiles the TypeScript code to JavaScript

  1. Determines the type of `hello` to enable type checking

- In our folder:

  1. TypeScript will resolve `./hello.js` to `./hello.ts`
     (yes, this is not a typo!)

  1. It will transpile `index.ts` to `dist/index.js`

  1. It will determine the type of `hello` by looking at `hello.ts`

- TypeScript does 1 and 2 according to flags in the `tsconfig.json` file

- And determines what the types are accoording to a fixed set of rules

- To understand these three, we need to understand the various options

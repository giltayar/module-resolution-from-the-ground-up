# 01 Introduction

- TypeScript is a superset of TypeScript

- Runtimes don't really understand TypeScript

- We need to transpile it!

  ```mermaid
  flowchart LR
      hello.ts --> dist/hello.js
  ```

- This is what TypeScript does.

- In our package this is done via `pnpm run build`, which runs `tsc` which is the TypeScript transpiler. And
  then to run the transpiled code, we run `node dist/hello.js`.

- The process of transpilation also does module resolution!

- Let's look at `index.ts`:

  ```ts
  import {hello} from './hello.js'

  console.log(hello)
  ```

- TypeScript does three things in the `import` statement

  1. Resolves the module specifier `./hello.js` to a file path (`hello.ts`)

  1. Transpiles the `index.ts` TypeScript code to JavaScript

  1. Determines the type of `hello.ts` to enable type checking

- In our directory:

  1. TypeScript will resolve `./hello.js` to `./hello.ts`
     (yes, this is not a typo!)

  1. It will transpile `index.ts` to `dist/index.js`

  1. It will determine the type of `hello` by looking at `hello.ts`

- TypeScript does 1 and 2 according to flags in the `tsconfig.json` file

- And determines what the types are accoording to a fixed set of rules

- To understand these three, we need to understand the various options in `tsconfig.json`
  and how they affect these three things.

- The next lessons will explain the options in `tsconfig.json` that affect module resolution.

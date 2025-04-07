# 01 Introduction

- TypeScript is a superset of TypeScript

- Runtimes (e.g. browsers, Node.js) don't understand TypeScript

- To run it, we need to transform TypeScript code to JavaScript (usually called "transpiling")

- Usually this is done by creating a separate directory and putting the transpiled code there.

- By convention, this directory is named `dist`.

  ```mermaid
  flowchart LR
      hello.ts --> dist/hello.js
  ```

- This is what TypeScript does. It transpiles the TypeScript `.ts` files to JavaScript `.js` files.

- We defined the `outDir` to TypeScript using the TypeScript configuration file
  `tsconfig.json`, and made it to be `dist`.

- In our package transpilation is done via `pnpm run build`,
  which runs `tsc` which is the TypeScript transpiler.

- This creates `dist/hello.js`.

- To run the transpiled code, we run `node dist/hello.js`.

- The process of transpilation also does module resolution!

- Let's look at `index.ts`:

  ```ts
  import {hello} from './hello.js'

  console.log(hello)
  ```

- TypeScript does three things in the `import` statement

  1. Resolves the module specifier `./hello.js` to a file path (`hello.ts`)

  1. Transpiles the `index.ts` TypeScript code to JavaScript

  1. Analyzes the types in `hello.ts` to determines the type of `hello`.

  1. Typechecks `index.ts` using the type found in `hello.ts`.

- In our directory:

  1. It will transpile `index.ts` to `dist/index.js`

  1. In the process, TypeScript will resolve `./dist/hello.js` to `./src/hello.ts`
     (yes, this is not a typo! It changes the directory _and_ the extension)

  1. It will determine the type of `hello` by looking at `hello.ts`

- TypeScript does 1 and 2 according to flags in the `tsconfig.json` file, specifically `moduleResolution` and `module`,
  but there are others.

- To understand how TypeScript does those three steps, we need to understand the various options in `tsconfig.json`
  and how they affect these three steps.

- The next lessons will explain the options in `tsconfig.json` that affect module resolution.

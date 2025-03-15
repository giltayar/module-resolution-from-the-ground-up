# 06 Conditional Exports

Reminder: the rules for determining the target files file type (i.e. CommonJS or ESM) are based on file extension:

- `.cjs` for CommonJS

- `.mjs` for ESM

- `.js` looks for "nearest" `package.json` and uses the `type` field to determine file type

Can we create a file that we can both `import` and `require`? Yes! Just make it CommonJS,
because Node.js allows `import`-ing CommonJS modules.

Can we create an _ESM_ file that we can both `import` and `require`? No! Because Node.js
does not allow `require`-ing ESM!

Modules are unambiguous - they can't be both ESM and CommonJS!

Let's look at this package:

```js
// index.mjs
import {hello} from 'hello'

// node_modules/
//   hello/
//     index.mjs
export const hello = 'hello'
```

I can _import_ this package. Can I `require` it? Can I do this?

```js
// index.cjs
const {hello} = require('hello')

// node_modules/
//   hello/
//     index.mjs
export const hello = 'hello'
```

We can't create an ESM package that both works for ESM and CommonJS.

This creates a problem for library packages. If their code stays in CommonJS, it works for both ESM and CommonJS,
but library authors don't want to stay in CommonJS, because that means that _they_ can't use ESM packages.

Let's build a dual-mode library with conditional exports!

```js
// index.mjs
import {hello} from 'hello'

// index.cjs
const {hello} = require('hello')

// node_modules/
//   hello/
//     index.mjs
export const hello = 'hello, ESM'

// node_modules/
//   hello/
//     index.cjs
module.exports.hello = 'hello, CommonJS'

// node_modules/
//   hello/
//     package.json
{
  "exports": {
    "./": {
      "import": "./index.mjs",
      "require": "./index.cjs"
    }
  }
}
```

With conditional exports (`import` vs `require` in the export) we're telling Node.js that
if the importer is using `import`, the resolution should be to `./hello.mjs`,
and if they're using `require`, it should resolve to `./src/hello.cjs`.

Custom conditions are evaluated from the first to the last - the first one who's condition is satisfied wins.

## Other conditions

There are other conditions, although those two are the most important:

- `default`: usually the last, and is always "true"

- `node`: both `import` and `require`, but only for Node.js.

We'll see that the community has adapted custom conditions for their use, and defined:

-`types`: the `.d.ts` file of the entry point, to define the TypeScritp types of that entrypoint
- `browser`: the condition when you want a file that works in the browser (as opposed to the `node` condition
  which applies when the code is being used in Node.js).

## Developing a dual-mode library

If I want to write a dual mode library, do I have to write it in twice - once as ESM and once as CommonJS?

No! What developers usually do to deal with this is to write the code in TypeScript, and transpile the code - once
to CommonJS and once to ESM.
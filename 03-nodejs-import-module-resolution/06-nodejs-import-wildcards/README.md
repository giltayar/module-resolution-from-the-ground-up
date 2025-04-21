# 06 Wildcards in exports

- Let's look at a package that wants to exports lots of entry points:

```js
// node_modules/hello/hello.js
export const hello = 'Hello'

// node_modules/hello/world.js
export const world = 'World'
```

- I want it to be used thus:

```js
// index.js
import {hello} from 'hello/words/hello'
import {world} from 'hello/words/world'
```

- We can create an exports that exports both of them:

```json
// node_modules/hello/package.json
{
  "exports": {
    "./words/hello": "./words/hello.js",
    "./words/world": "./words/world.js"
  }
}
```

- But what if we have lots of those?

```json
// node_modules/hello/package.json
{
  "exports": {
    "./words/*": "./words/*.js"
  }
}
```

- Limitations - only one `*` allowed!

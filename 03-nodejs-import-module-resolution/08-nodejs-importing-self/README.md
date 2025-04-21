# 08 Importing self package

- We saw how we can use the `package.json`'s `import` field to enable paths _into_ the package.

- There is another way to import things from the package.

- Let's say we're building a package we'll call `center-string`, who's entry point is the `centerString` function.

- It's `package.json` looks something like this:

```json
{
  "name": "center-string",
  "exports": "./src/center-string.js"
}
```

- How can we know that once we publish it, the package user
  is able to write the following and that it will work?

```js
import {centerString} from 'center-string'
```

- Without publishing the package, we can only guess that this works,
  and only by publishing the package can we for sure know that it works.

- But there actually is a way to do this! We can use "self-referencing".

- Let's look at a test that is part of the code of the package:

```js
import {centerString} from 'center-string' // self-referencing

test('should center a string within specified width', () => {
  expect(centerString('hello', 11)).toBe('   hello   ')
})
```

- The first line is importing the package with the same name as in the `package.json`. This is self-referencing.

- Node.js will not only look in the `node_modules` directory as we discussed, but it finds a `package.json`
  when going up the directory hierarchy, and that `package.json` has a `name` field with that name, then
  it will use the information in the `package.json`, i.e. `exports` and `main` as we learned, to resolve the module.

- This means that `center-string` cannot be used to access code in the package that is not "allowed" by the
  `exports` field if there is one, so this won't work even though it points to a correct module:

```js
import {centerString} from 'center-string/src/center-string.js' // won't work

```

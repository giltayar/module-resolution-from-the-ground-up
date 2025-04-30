# 01 What is module resolution?

```js
// index.js
import {show} from './show.js'
import throttle from 'p-throttle'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}

// show.js
export function show(message) {
  console.log(message)
}
```

---

To run this Node.js code, we...

```sh
$ node index.js
Hello world
Hello world
Hello world
Hello world
Hello world
```

When running the code in `index.js`, Node.js finds those import statements:

```js
import {show} from './show.js'
import throttle from 'p-throttle'
```

And in those import statements, it finds the part in quotes: `./show.js` and `p-throttle` -
those are _module specifiers_.

---

Those imports need to find the module "pointed to" by `./show.js` and `p-throttle`.

In the case of `./show.js`, it is the file `{projectRoot}/show.js`.

And in the case of `p-throttle`, it's `node_modules/p-throttle/index.js`.

The process by which Node.js maps the strings to modules on the disk is called _module resolution_.

In this course, we will learn how Node.js and other tools do module resolution.

Note - in JavaScript, "module" is just a fancy name for "file". 😁

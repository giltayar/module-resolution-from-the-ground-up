## 01 How does Node.js resolve `import` with relative specifiers?

- We've seen how browsers do module resolution, and we saw how simple they implement relative specifiers and even
  bare specifiers

- Let's go to the backend - how does Node.js do module resolution on `import` ?

- Notice that Node.js also supports CommonJS, i.e. `require`, but the module resolution is different (and more
  complex!) there, so we'll talk about it later.

- Relative paths work _exactly_ like in the browser. This is by _design_ so that code that works in Node.js will
  work exactly as is in Node.js

- So the algorithm is simple - you take the current path as a `file:` URL and you use the relative path in the
  specifier, and absolutize it. Just like `<img src>` !

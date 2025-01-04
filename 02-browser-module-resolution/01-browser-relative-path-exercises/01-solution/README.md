# Exercise #1 solution

The console first shows: `SyntaxError: Cannot use import statement outside a module`. This is because
the `<script src>` does not contain a `type="module"` that tells the browser that the file is an ESM module and
can use `import`.

Fix this by adding `type="module"` to the `<script src>`.

The console now shows a 404 on `http://localhost:3000/show-utils/show`. This is because there is no file `show` there.
ESM in the browser MUST specify an extension because it looks for the exact file and doesn't try to "guess" the
extension.

Fix this by adding the extension `.js` to the `import` module specifier in `index.js`.
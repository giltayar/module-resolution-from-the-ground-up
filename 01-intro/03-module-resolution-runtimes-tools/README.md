# 03 Who uses module resolution

Reminder: "Module resolution" is how the JS runtime resolves the specifier in
ESM-s `import {something} from '*specifier*'` and CommonJS-s in `const {something} = require('*specifier*')`.

But there are different kinds of JS runtimes. And there are other tools that do module resolution!

1. The browser

   The browser knows how to do ESM `import/export` natively!

2. Node.js when using `import`

   We already saw that Node.js supports ESM.

3. Node.js when using `require`

   We already saw that Node.js supports CommonJS.

4. TypeScript

   When Typescript sees an import it needs to figure out what that file is, so it can process it too.
   So it _also_ has a module resolver.

5. Bundlers

   Bundlers like Vite, WebPack, Parcel, and others need to trace all `import`-s and `require`-s in an a
   app in order to bundler them all in one big file, and so they also have a module resolver inside them.

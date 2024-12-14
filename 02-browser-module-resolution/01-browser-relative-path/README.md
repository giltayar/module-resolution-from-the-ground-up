# 01 How does module resolution work in the browser for relative paths?

- Module resolution is how we interpret the "specifier" in `import {something} from '*specifier*'`. This
  section deals with how this interpretation works in the browser.

- While importing can also be done with `const {something} = require('*specifier*')`, the browser doesn't
  support this. It only supports ESM `import`.

- We've also seen that there are other module resolvers out there (e.g. Node.js, TypeScript), the easiest one
  to explain is the browser one!

- Example with relative path

- It's basically like `<img src>`

- The browser resolves the relative path according to the current file path

- Of course, it then HTTP GET-s the URL to get at the source code, but that's not part of module resolution.

- What about absolute URL? Sure, it works! Let's use esm.sh

- So...

  ```jsx
  function moduleResolution(currentUrl, specifier, kindOfImport = 'import') {
    if (kindOfImport !== 'import') throw new Error()

    return new URL(specifier, currentURL).href
  }
  ```

- That's it!

- Wait... what about import ‘p-throttle'. How does _that_ work?

- Well, it doesn't. Show the exception.

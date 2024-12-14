# 03 How does module resolution work?

- Module resolution is how a "module resolver" resolves the specifier in `import {something} from '*specifier*'` and in `const {something} = require('*specifier*')`.

- But what kind of module resolvers are there? How many are there?

- Well, there's a lot:
  1. The browser
     - If you do a `<script type=module>import...</script>`, then the browser has an algorithm that defines how to take that specifier and turn it into an HTTP path
     - It's basically how `<img src>` works

  2. Node.js when using `import`
     - We'll see that this is a pretty simple algorithm

  3. Node.js when using `require`
     - We'll see that it's a pretty complicated algorithm

  4. TypeScript
     - Yes, yes - when Typescript sees an import it needs to figure out what that file is, so it can process it too. So it _also_ has a module resolver.
     - And we'll see that the answer her is - it depends

  5. Bundlers
     - What are bundlers? We'll get to that...

- I'm sorry, that's how it is - there are lots of module resolvers, and we're about to learn about how all of them work

## 02 What kinds of "import"-s are there?

- Module resolution is how the JS runtime resolves the specifier in `import {something} from '*specifier*'` .

- But is this the only way to import a module? No, there are two ways.

- ESM - the main one

  - Show

- CJS - the legacy one

  - Show

- ESM was defined in 2015, but implementations really started being there only in 2020

- So until then, Node.js used CJS

- It's still most of NPM

- (and as we'll see, we also have "faux ESM", but we'll talk about that later)

- So (current filepath/url, specifier, kind of import) => filepath/url

- This is what defines a module resolver. This is the algorithm

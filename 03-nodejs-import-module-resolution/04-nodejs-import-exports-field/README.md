## 04 How Node.js supports multiple entry points with `exports`

- We've seen how Node.js uses the `main` field in `package.json` to figure out the entry point

- But we've also seen that developers can use _any_ module they want in the package by deep-linking into them.

- We can use `exports` just like `main`: `"exports": "./hello.js"`

- But if the developer tries to deep-link, Node.js will throw an error.

- But `exports` can accept a "map" of entry points, where you can specify others and map them to files in the package!

- This enables you to define multiple entry points to the package, and have the users of the package use _only_ them.

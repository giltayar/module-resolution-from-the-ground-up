## 02 How does Node.js resolve `import` with bare specifiers?

- Up to now, every module resolution we've seen was simple:

  - Relative paths, both in Node.js and browsers was just URL absolutization

  - Bare specifiers in browsers was just a lookup in an importmap

- But this is now more complicated. In Node.js, a bare specifier usually points to a package that was installed by `npm install` in the `node_modules` folder, so it makes sense that it has in the algorithm the `node_modules` folder and the `package.json`.

- Let's take it slowly.

- The first thing Node.js does is look in the current directory of the current file for a `node_modules` folder.

  - It's not there? Look one directory above (all the way to the root of the filesystem)

- Once found, look for a directory with the name of the package.

  - Not there? Continue up the directories like above

- The directory contains either an `index.js` file that is the module we're looking, or a `package.json` with information on which file to use.

  - Not there? I think it continues up the directories. Not sure...

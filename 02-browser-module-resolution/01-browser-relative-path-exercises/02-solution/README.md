# Exercise #2 solution

The console now shows a 404 on `http://localhost:3000/app/utils/show.js`.
This is because the path specifier is `./utils/show.js`, and the current `index.js` URL is
`http://localhost/app/index.js` (note the `/app`!). Absolutizing this generates the incorrect URL.

One correct way would be to use `..` to get from the `app` directory to the sibling `utils` directory.

To fix this, change the module specifier from `./utils/show.js` to `../utils/show.js`.

An alternative way, using `/` is show in solution #2.

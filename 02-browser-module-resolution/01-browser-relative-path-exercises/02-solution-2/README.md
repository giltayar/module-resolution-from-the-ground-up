# Exercise #2 solution #2

The console now shows a 404 on `http://localhost:3000/app/utils/show.js`.
This is because the path specifier is `./utils/show.js`, and the current `index.js` URL is
`http://localhost/app/index.js` (note the `/app`!). Absolutizing this generates the incorrect URL.

To fix this, change the module specifier from `./utils/show.js` to `/utils/show.js`. This is an
"absolute path" specifier. It's still relative because it's using the domain to absolutize, but the path
itself ignores the path of the current module url and just its domain.

An alternative way, using `..` is show in solution #1.

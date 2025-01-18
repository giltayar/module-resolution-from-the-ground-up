# Exercise #1

The `index.html` is missing the source map mappings to make it work and show "hello, world". Fix it!

1. Run `pnpm install` to install dependencies.

1. Run `pnpm start` to run the web server

1. View the page in <http://localhost:3000>

1. Add the missing mapping to the import map so that the web page shows "hello, world" three times and stops.

1. Want to be sure it works? Run `pnpm test` to verify that the solution works.

Hints:

- Look in `index.js` to see what package the JavaScript imports, and use the import map to map that
  package to the proper `esm.sh` URL

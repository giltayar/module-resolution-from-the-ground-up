# Exercise #2

The `index.html` is missing the source map mappings to make it work and show "hello, world". Fix it!

1. Run `pnpm install` to install dependencies.

1. Run `pnpm start` to run the web server

1. View the page in <http://localhost:3000>

1. Add the missing mapping to the import map so that the web page shows "hello, world" three times and stops.

   - Don't use `esm.sh`. Instead, use the files in `node_modules`

   - Note that this time, you'll need _two_ imports in the map, because the first package also uses another package,
     `p-throttle`. Which is also in `node_modules`.

1. Want to be sure it works? Run `pnpm test` to verify that the solution works.

Hints:

- Use the Dev Tools console output to figure out what packages the HTML is using, and map those to the
  appropriate file in `node_modules`.

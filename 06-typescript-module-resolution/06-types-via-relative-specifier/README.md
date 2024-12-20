# Finding the types in relative specifiers

- When TypeScript figures out the corresponding `.ts` file of a relative specifier, it will
  figure out the types from that file

- But you don't need the `.ts` file when transpiling - you can just have the `.d.ts`

- Obviously, this code won't run after transpiling, because when running it will not find the `.js` file,
  but it _will_ transpile

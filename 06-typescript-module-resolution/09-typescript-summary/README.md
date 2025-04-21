# 09 TypeScript summary

- TypeScript module resolution is configurable via the `moduleResolution` field in `tsconfig.json`

- `moduleResolution: NodeNext`: just like the one in Node.js (ESM and CommonJS)

- `moduleResolution: Bundler`: Treat CommonJS like CommonJS, and ESM like CommonJS too!

- TypeScript will NOT change the module specifier, so it has to be the one that will be used in runtime.

- In other words, use the `.js` extension if you must specify an extension.

- TypeScript will reverse engineer the `.ts` extension to figure out what the source code is.

- to resolve the types of a file that has no source code, it uses `.d.ts` files.

- For relative specifiers, it's the same module resolution like always,
  except it reverse engineers the `.d.ts` extension.

- For bare specifiers, it will use the regular module resolution, but with the `types` condition.

- If there is no `exports` in the `package.json`, it will use the `types` field.

---

## Best practices

- If you can, use `moduleResolution: NodeNext`. It is the only one that is compatible with all runtimes
  (Node.js, browser, Bun, Deno...).

- If you can't, use `moduleResolution: bundler`.

- Use `exports` and the custom condition `types` for type resolution. Don't use the "main" `types` because
  it does not work if you have multiple entry points to the package.

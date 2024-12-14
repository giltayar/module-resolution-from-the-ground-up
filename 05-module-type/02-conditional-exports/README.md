# 06 Conditional Exports

- The rules for determining the target files file type (i.e. CommonJS or ESM) are based on file extension:
  - `.cjs` for CommonJS
  - `.mjs` for ESM
  - `.js` looks for neareset `package.json` and uses the `type` field to determine file type
- So the target file type is unambiguous! No matter what the source file type is (ESM or CommonJS), the target file type does not rely on it.
- This is usually great, but really bad for library writers.
- What if they want to write a package that works both if you `require` it and if you `import` it?
- You use "conditional exports".

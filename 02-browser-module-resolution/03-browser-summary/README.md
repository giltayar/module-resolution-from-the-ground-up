# 03 Browser module resolution summary

- Browsers support `import` (ESM only). CommonJS is not supported.

- Use `<script type="module" src="entry-point.js">`

- Module specifiers are URL (relative or absolute)

- Final module location is a URL

- Relative paths are resolved relative to the importing module

  - Like `<img src>` URLs!

- Relative paths MUST use full filename, including extension

- Absolute URL-s are also allowed

- To use bare specifiers, you must specify the translation using an import map

---

## Browser Module Resolution Algorithm (Simplified)

```js
function moduleResolutionBrowser(currentModuleUrl, specifier, kindOfImport = 'import') {
  if (kindOfImport !== 'import') {
    throw new Error('only ESM is supported in the browser')
  }

  if (specifier.startsWith('.') || specifier.startsWith('/') || specifier.includes(':')) {
    return new URL(specifier, currentModuleURL).href
  } else if (getPageImportMap() === undefined) {
    throw new Error('bare specifier found, but no import map is available')
  } else {
    return getPageImportMap().imports[specifier]
  }
}
```

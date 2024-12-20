# Faux ESM

- If we use the default `moduleResolution`, which is `classic`, then TypeScript behaves very similarly to the
  CommonJS module resolution algorithm, which doesn't need extensions

- So we're using the `import` statements, but in a way that is not Node.js or browser compatible!

- Some people have started calling this "Faux ESM" or "False ESM", because it _looks_ like ESM, but is not
  compatible with the way browsers (and Node.js) view ESM.

- This is unfortunate, and is exacerbated by the fact that the `bundler` module resolution does just that.

- In essence, we're using the ESM syntax, but the CommonJS module resolution.

# 01 Vite Module Resolution

- Vite and other bundlers use a module resolution that we already saw that TypeScript supports - `bundler`

- The `bundler` module resolution algorithm is the Node.js CommonJS module resolution.

- The `bundler` module resolution is an interesting one - it makes you write "Faux ESM".
  Why call it "False ESM"? Because the ESM you write can't run natively in the browser or in Node.js!

- It needs to be transpiled, even if it is pure JavaScript

- Historically, the `bundler` module resolution came before TypeScript. It was created before Node.js had ESM
  and before browsers had ESM. All we had was CommonJS, so that when transpilers like Babel transpiled the `import`,
  they transpiled it to `require`. Thus it made sense to use the CommonJS module resolution algorithm.

- Today it doesn't make any sense, but history is hard to shake off.
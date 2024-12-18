# 01 Vite Module Resolution

- Vite and other bundlers use a module resolution that we already saw that TypeScript supports - `bundler`

- The `bundler` module resolution algorithm is the Node.js CommonJS module resolution.

TBD

... and explain how it doesn't run in Node.js, but rather in the bundler
... the bundler module resolution algorithm is actually the CommonJS resolution algorithm! So extensionless
... imports are supported. The only twist is that the condition is still `import` and not `require`

- This is Faux ESM, as it doesn't (and can't) run in the browser (or Node.js)

- Explain that the bundler module resolution came about because Babel and TypeScript created it before
  Node.js came and defined the ESM module resolution algorithm to be browser compatible

- Explain how it is a practical solution, but creates JavaScript that is browser incompatible


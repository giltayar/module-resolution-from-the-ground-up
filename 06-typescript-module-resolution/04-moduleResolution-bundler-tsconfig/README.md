## 04 The `moduleResolution: bundler` Option in `tsconfig.json`

TBD

... and explain how it doesn't run in Node.js, but rather in the bundler
... the bundler module resolution algorithm is actually the CommonJS resolution algorithm! So extensionless
... imports are supported. The only twist is that the condition is still `import` and not `require`

# 05 Bundler summary

- Bundlers like Vite use the `bundler` module resolution algorithm that we saw can be defined for TypeScript.

- This module resolution uses the CommonJS algorithm even for ESM, and has historical and practical reasons.

- Just like TypeScript, you can specify custom conditions.

- You can also specify custom main fields.

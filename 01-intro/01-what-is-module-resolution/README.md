# 01 What is module resolution?

- Let's talk about module resolution in JavaScript

- Show an import and then show the specifier

- Why "module"? Fancy name for "JS file"

- The algorithm that resolves a specifier to a path is called a "module resolver"

- The resolution depends on the current file and the specifier

- And resolves to a file path, or in the browser case, a URL

- So... (current filepath/url, specifier) => filepath/url

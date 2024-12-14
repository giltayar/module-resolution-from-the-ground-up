const {world} = require('dual-mode-library')

async function main() {
  const {hello} = await import('dual-mode-library')

  console.log(hello, world)
}

main()

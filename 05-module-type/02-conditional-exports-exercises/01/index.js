const {hello: helloCjs} = require('dual-mode-library')
const {reverseWords: reverseWordsCjs} = require('dual-mode-library/reverse')

async function main() {
  const {hello} = await import('dual-mode-library')
  const {reverseWords} = await import('dual-mode-library/reverse')

  console.log(reverseWordsCjs(reverseWords(`${hello} ${helloCjs} world`)))
}

main()

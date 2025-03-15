const {hello: helloCjs} = require('hello-world')
const {reverseWords: reverseWordsCjs} = require('hello-world/reverse')

async function main() {
  const {hello} = await import('hello-world')
  const {reverseWords} = await import('hello-world/reverse')

  console.log(reverseWordsCjs(reverseWords(`${hello} ${helloCjs} world`)))
}

main()

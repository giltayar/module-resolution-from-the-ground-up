async function main() {
  const {hello} = await import('./hello.mjs')

  console.log(hello)
}

main()

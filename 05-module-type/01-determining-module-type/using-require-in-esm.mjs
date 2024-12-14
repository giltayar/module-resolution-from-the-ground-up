import {createRequire} from 'module'
const require = createRequire(import.meta.url)

const {hello} = require('./hello.cjs')

console.log(hello)

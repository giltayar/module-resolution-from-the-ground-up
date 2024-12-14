import {hello} from './hello.cjs'
import {hello as hello2} from './hello.mjs'
import {hello as hello3} from './commonjs/hello.js'
import {hello as hello4} from './esm/hello.js'

console.log(hello, hello2, hello3, hello4)

import {hello} from './hello.mjs'
import {world} from './world.cjs'
import {hello as hello2} from './esm/hello.js'
import {world as world2} from './commonjs/world.js'

console.log(hello, world)
console.log(hello2, world2)

import {printStuff, type Stuff} from 'stuff'
import {decorate} from 'stuff/decoration'
import throttle from 'p-throttle'

const showStuff = throttle({interval: 500, limit: 1})((stuff: Stuff) => {
  printStuff(decorate(stuff))
})

for (let i = 0; i < 5; i++) {
  showStuff('stuff1')
}

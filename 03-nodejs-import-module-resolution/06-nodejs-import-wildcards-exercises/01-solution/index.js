import {centerString} from 'string-algos/algo/center-string'
import {alignStringsRight} from 'string-algos/algo/align-strings'
import {rightPad} from 'string-algos/algo/right-pad'

const centered1 = centerString('abc', 10)
const rightPadded1 = rightPad('def', 10)

console.log(alignStringsRight([centered1, rightPadded1, 'ghi', '   yz']).join('\n'))

// Should output (withouth the "|", and the "." signifies space):
// |...abc....|
// |.......def|
// |.......ghi|
// |........yz|

import {show} from './show-utils/show.js'
//import throttle from 'https://esm.sh/p-throttle'
import throttle from 'p-throttle'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}

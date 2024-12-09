import {show} from './show-utils/show.js'
import throttle from 'throttle'
// import throttle from 'https://esm.sh/p-throttle'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}

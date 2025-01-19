import {throttledShow} from 'ftgu-browser-throttled-show'

const show = throttledShow('hello, world')

for (const _ of [1, 2, 3]) {
  show()
}

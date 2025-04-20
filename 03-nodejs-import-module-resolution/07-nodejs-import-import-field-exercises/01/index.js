import throttle from '#throttle'
import {hello} from '#hello'
import {world} from '#world'
import {show} from './show.js'

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow(`${hello} ${world}`)
}

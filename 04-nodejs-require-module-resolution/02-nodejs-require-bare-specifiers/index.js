const {show} = require('./show-utils/show')
const throttle  = require('p-throttle')

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 5})) {
  throttledShow('hello world')
}

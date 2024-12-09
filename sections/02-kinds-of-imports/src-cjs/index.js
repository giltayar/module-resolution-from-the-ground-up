const throttle = require('p-throttle')
const {show} = require('./show')

const throttledShow = throttle({interval: 500, limit: 1})(show)

for (const _ of Array.from({length: 10})) {
  throttledShow('hello world')
}

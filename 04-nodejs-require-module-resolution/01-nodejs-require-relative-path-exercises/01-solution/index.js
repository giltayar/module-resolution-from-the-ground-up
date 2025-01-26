const {show} = require('./show-utils/show')

let count = 0

const timer = setInterval(() => {
  show('Hello, World!')

  if (++count === 5) clearInterval(timer)
}, 500)

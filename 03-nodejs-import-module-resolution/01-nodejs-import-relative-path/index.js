import {show} from './show-utils/show.js'

let count = 0

const timer = setInterval(() => {
  show('Hello, World!')

  if (++count === 5) clearInterval(timer)
}, 500)

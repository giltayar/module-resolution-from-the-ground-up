import {rotateString} from 'rotate-string'
import pThrottle from 'p-throttle'

const strToRotate = 'hello world'

const showRotatedString = pThrottle({interval: 500, limit: 1})((n: number) => {
  const rotated = rotateString(strToRotate, n)

  document.getElementById('root')!.innerHTML += rotated + '<br>'
})

for (let i = 0; i < 5; i++) {
  showRotatedString(i)
}

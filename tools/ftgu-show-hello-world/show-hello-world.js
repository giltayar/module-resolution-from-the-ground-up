import {hello, world} from 'ftgu-hello-world'
import figlet from 'figlet'

console.log(
  figlet.textSync(
    `${hello('english', {caseType: 'capitalize'})}, ` + world('italian', {caseType: 'lower'})
  )
)

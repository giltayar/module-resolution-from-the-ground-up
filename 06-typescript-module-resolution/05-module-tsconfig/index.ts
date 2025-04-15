import pThrottle from 'p-throttle'
import {hello} from './hello.js';

console.log(pThrottle(), hello);

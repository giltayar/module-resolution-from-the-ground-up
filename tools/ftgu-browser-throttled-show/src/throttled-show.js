import throttle from 'p-throttle'

/**
 * @param {string} message
 * @param {{interval?: number, selector?: string}} options
 */
export function throttledShow(message, {interval = 500, selector = '#root'} = {}) {
  function show() {
    const element = document.querySelector(selector)
    if (!element) {
      throw new Error(`cannot find element with selector ${selector}`)
    }

    element.innerHTML += message + '<br>'
  }

  return throttle({interval, limit: 1})(show)
}

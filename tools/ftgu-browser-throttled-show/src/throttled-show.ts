import throttle from 'p-throttle'

export function throttledShow(
  message: string,
  options: {interval?: number; selector?: string} = {}
) {
  const {interval = 500, selector = '#root'} = options

  function show() {
    const element = document.querySelector(selector)
    if (!element) {
      throw new Error(`cannot find element with selector ${selector}`)
    }

    element.innerHTML += message + '<br>'
  }

  return throttle({interval, limit: 1})(show)
}

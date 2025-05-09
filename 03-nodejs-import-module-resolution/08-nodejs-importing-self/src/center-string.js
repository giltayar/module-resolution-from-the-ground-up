export function centerString(str, width) {
  const totalPadding = Math.max(width - str.length, 0)
  const leftPadding = Math.floor(totalPadding / 2)
  const rightPadding = totalPadding - leftPadding

  return ' '.repeat(leftPadding) + str + ' '.repeat(rightPadding)
}

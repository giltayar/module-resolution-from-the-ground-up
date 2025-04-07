export function show(message: string) {
  //@ts-expect-error
  document.getElementById('root').innerHTML += message + '<br>';
}

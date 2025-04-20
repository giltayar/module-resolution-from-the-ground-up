export function hello(language) {
  const greetings = {
    english: 'Hello',
    spanish: '¡Hola',
    french: 'Bonjour',
    german: 'Hallo',
    italian: 'Ciao',
    chinese: '你好',
  }

  return greetings[language] ?? greetings.english
}

export function world(language) {
  const worlds = {
    english: 'World',
    spanish: 'Mundo',
    french: 'Monde',
    german: 'Welt',
    italian: 'Mondo',
    chinese: '世界',
  }

  return worlds[language] ?? worlds.english
}

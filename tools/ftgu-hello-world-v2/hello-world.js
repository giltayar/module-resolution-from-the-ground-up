export function hello(language, {caseType}) {
  const greetings = {
    english: 'Hello',
    spanish: '¡Hola',
    french: 'Bonjour',
    german: 'Hallo',
    italian: 'Ciao',
  }

  const greeting = greetings[language] ?? greetings.english

  if (caseType === 'lower') {
    return greeting.toLowerCase()
  } else if (caseType === 'upper') {
    return greeting.toUpperCase()
  } else {
    return greeting
  }
}

export function world(language, {caseType}) {
  const worlds = {
    english: 'World',
    spanish: 'Mundo',
    french: 'Monde',
    german: 'Welt',
    italian: 'Mondo',
  }

  const greeting = worlds[language] ?? worlds.english

  if (caseType === 'lower') {
    return greeting.toLowerCase()
  } else if (caseType === 'upper') {
    return greeting.toUpperCase()
  } else {
    return greeting
  }
}

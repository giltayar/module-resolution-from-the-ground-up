type Language = 'english' | 'spanish' | 'french' | 'german' | 'italian'
type CaseType = 'upper' | 'lower' | 'capitalize'

export function hello(language: Language, options: {caseType: CaseType}): string

export function world(language: Language, options: {caseType: CaseType}): string

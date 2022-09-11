// async imports or dynamic imports example

const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl']
const selectedLanguage = process.argv[2]

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
  console.error('The specified language is not supported')
  process.exit(1)
}

const translationModule = `./strings-${selectedLanguage}.js` // ①

// dynamic import example
import(translationModule) // ②
  .then((strings) => { // ③
    console.log(strings.HELLO)
  })

// The import() operator is syntactically equivalent to a function
// that takes a module identifier as an argument n it returns a
// promise that resolves to a module object..


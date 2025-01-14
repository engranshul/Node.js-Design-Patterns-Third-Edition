function createPerson (name) {
  // below properties inaccessible from outside
  const privateProperties = {} 

  const person = {
    setName (name) {
      if (!name) {
        throw new Error('A person must have a name')
      }
      privateProperties.name = name
    },
    getName () {
      return privateProperties.name
    }
  }

  person.setName(name)
  return person
}

const person = createPerson('James Joyce')

console.log(person);

console.log(person.getName())

console.log(person.privateProperties); // gives undefined

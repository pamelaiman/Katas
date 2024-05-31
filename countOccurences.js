function countOccurences(inputString) {

    // tests if input is a string
    if (Number.isInteger(inputString)) {
      return "this is not a string"
    }
    
    const occurence = {} 
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    
    const newString = inputString.toLowerCase()
    const characters = newString.split("")
  
    if (characters.length === 0) {
      return "string is empty"
    }
  
    for (let character of characters) {
      if (alphabet.includes(character)) {
        if (character in occurence) {
          occurence[character] += 1
        } else {
          occurence[character] = 1
        }
      }
    }
    return occurence
  }
  
  console.log(countOccurences(""), "expected: string is empty")
  console.log(countOccurences("HELLO"), "expected: {h: 1, e: 1, l: 2, o: 1}")
  console.log(countOccurences(2), "expected: this is not a string")
  console.log(countOccurences("1234"), "expected: {}")
  console.log(countOccurences("Hello$#@123World"), "expected: {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}")
  
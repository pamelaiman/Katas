function makeAlternatingArray(inputNumber, firstItem, secondItem) {
    const result = []
    while (result.length < inputNumber) {
      for (let i = 0; i < inputNumber; i++) {
        if (i % 2 === 0) {
            result.push(firstItem)
        } else {
            result.push(secondItem)
        }
      }
    }
    return result
}
console.log(makeAlternatingArray(5, "mo", "ali"), 'expected to be: `["mo", "ali", "mo", ali", "mo"]`')
console.log(makeAlternatingArray(8, -20, 100), 'expected to be: `[-20, 100, -20, 100, -20, 100, -20, 100]`')
console.log(makeAlternatingArray(1, "🦈", "🐨"), 'expected to be: `["🦈"]`')
console.log(makeAlternatingArray(0, "team1", "team2"), 'expected to be: `[]`')
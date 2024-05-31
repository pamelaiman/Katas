const makeCountdownArray = (inputNumber, string) => {
    const results = [];
    for (let i = inputNumber; i > 0; i--){
      results.push(i);
    }
    results.push(string);
    return results
  }
  
console.log(makeCountdownArray(3, "🚀"), "expected: ", [3,2,1,"🚀"])
console.log(makeCountdownArray(5, "💥"), "expected: ", [5, 4, 3,2,1,"💥"])
console.log(makeCountdownArray(0, "💥"), "expected: ", ["💥"])
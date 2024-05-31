function min(a, b) {
    return (a < b) ? a : b;
}

  // function min(a, b) {
  //   if (a < b) {
  //     return a
  //   } else {
  //     return b
  //   }
  // }

console.log(min(4, 5), "expected: 4")
console.log(min(0, 0), "expected: 0")
console.log(min(50, -4), "expected: -4")
console.log(min("hello", 5), "expected: 5")
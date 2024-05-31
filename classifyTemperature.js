classifyTemperature = (temp) => {
    if (temp < 0) {
        return 'freezing'
    } else if (15 > temp) {
        return 'chilly'
    } else if (25 > temp) {
        return 'pleasant'
    }   else if (40 > temp) {
      return 'hot'
    }   else if (temp >= 40) {
      return 'too hot'
    }   else {
      return "not a temperature"
    }
  }
  
console.log(classifyTemperature(-4), "expected: freezing")
console.log(classifyTemperature(4), "expected: chilly")
console.log(classifyTemperature(21), "expected: pleasant")
console.log(classifyTemperature(28), "expected: hot")
console.log(classifyTemperature(40), "expected: too hot")
console.log(classifyTemperature(15), "expected: pleasant")
console.log(classifyTemperature("hi"), "expected: not a temperature")
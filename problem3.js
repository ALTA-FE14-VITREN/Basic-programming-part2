function primeNumber(number) {
  if (number <= 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(primeNumber(11));
console.log(primeNumber(13));
console.log(primeNumber(17));
console.log(primeNumber(20));
console.log(primeNumber(35));
console.log(primeNumber(22));

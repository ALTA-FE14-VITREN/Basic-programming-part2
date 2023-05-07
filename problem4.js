function palindrome(string) {
  return string === string.split("").reverse().join("");
}

console.log(palindrome("civic"));
console.log(palindrome("katak"));
console.log(palindrome("kupu-kupu"));
console.log(palindrome("lion"));
console.log(palindrome("medan"));

// 28. GCD (Greatest Common Divisor)
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(gcd(18, 24)); // 6
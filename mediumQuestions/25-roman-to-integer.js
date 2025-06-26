// Roman to Integer
function romanToInt(s) {
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = map[s[i]], next = map[s[i+1]];
    total += (next > curr) ? -curr : curr;
  }
  return total;
}

console.log(romanToInt("XIV")); // 14
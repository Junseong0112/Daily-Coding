function solution(s){
    if (s.length % 2 !== 0) return false; 
    const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (map[last] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
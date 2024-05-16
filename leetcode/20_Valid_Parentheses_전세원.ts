function isValid(s: string): boolean {
  const stack = [];

  const bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let el of s) {
    if (el === "(" || el === "[" || el === "{") {
      stack.push(el);
    }

    if (el === ")" || el === "]" || el === "}") {
      if (stack.length > 0 && bracket[stack.at(-1)] === el) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
}

export function parseExpressionStack(stack) {
  if (stack.length === 0) {
    return "0";
  }
  return stack.join("");
}

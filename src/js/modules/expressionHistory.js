export function addExpression(history, expression) {
  const newHistory = [...history.slice(-2), expression];
  return newHistory;
}

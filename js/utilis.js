export function notANumber(value) {
  return isNaN(value) || value == '';
}

export function calcIMC(weight, height) {
  const result = weight / ((height/100)**2);
  return Number(result.toFixed(1));
}
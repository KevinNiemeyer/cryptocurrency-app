export function round(value, numPlaces) {
  return Number(parseFloat(value).toFixed(numPlaces)).toLocaleString('en', {
    minimumFractionDigits: numPlaces,
  });
}

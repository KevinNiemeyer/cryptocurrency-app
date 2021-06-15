export function round(value, numPlaces) {
  return Number(parseFloat(value).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: numPlaces,
  });
}

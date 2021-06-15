export function round(value, numPlaces) {
  return value > 1
    ? Number(parseFloat(value).toFixed(numPlaces)).toLocaleString('en', {
        minimumFractionDigits: numPlaces,
      })
    : Number(parseFloat(value).toFixed(6)).toLocaleString('en', {
        minimumFractionDigits: 6,
      });
}

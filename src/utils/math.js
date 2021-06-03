export function round(value, numPlaces) {
  //const rounded= Math.round(value * places) / places;
  return Number(parseFloat(value).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: numPlaces,
  });
}

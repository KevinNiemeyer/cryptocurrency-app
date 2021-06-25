import { camelCase, isArray, isPlainObject } from 'lodash';

export function toCamelCase(obj) {
  if (isPlainObject(obj)) {
    const n = {};
    Object.keys(obj).forEach((k) => (n[camelCase(k)] = toCamelCase(obj[k])));
    return n;
  } else if (isArray(obj)) obj.map((i) => toCamelCase(i));
  return obj;
}

export function toLowerCase(data) {
  const newList = data.map((coinName) => {
    return coinName.toLowerCase();
  });
  return newList;
}
/* export function toCamelCase(object) {
  const newObject = Object.entries(object).reduce((acc, keyValue) => {
    const [key, value] = keyValue;
    return { ...acc, [camelCase(key)]: value };
  }, {});
  return newObject;
}
 */

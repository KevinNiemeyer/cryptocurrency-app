import { camelCase } from 'lodash';

export function toCamelCase(object) {
  const newObject = Object.entries(object).reduce((acc, keyValue) => {
    const [key, value] = keyValue;
    return { ...acc, [camelCase(key)]: value };
  }, {});
  return newObject;
}

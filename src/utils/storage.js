function storage(type, key, data) {
  console.log(key);
  if (type === 'set') {
    window.localStorage.setItem(key, JSON.stringify(data));
  } else if (type === 'get') {
    const item = JSON.parse(window.localStorage.getItem(key));
    return item;
  }
}

export default storage;

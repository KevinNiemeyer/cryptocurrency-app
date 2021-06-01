function storage(type, key, data) {
    if (type === 'set') {
         window.localStorage.setItem(key, JSON.stringify(data));
    } else if (type === 'get') {
        const item = JSON.parse(window.localStorage.getItem(key));
        console.log(item)
        return item;
    }     
}

export default storage;
export default {
    save,
    load
}

function save(key, value) {
    var item = JSON.stringify(value);
    localStorage.setItem(key, item);
}

function load(key) {
    var item = localStorage.getItem(key)
    var value = JSON.parse(item);
    return value;
}
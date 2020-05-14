// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key]= value
    return object
}

function deleteFromDriverByKey(object, key) {
    let newobj = Object.assign({}, object)
    delete newobj[key]
    return newobj
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
    return object
}
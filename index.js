// Write your solution in this file!
let driver = {}

//returns a new object
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]:value } )
}

//directly changes the original object
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
}

// Creates a new driver using the old driver 
// New driver copies the properties(keys/values) from driver
function deleteFromDriverByKey(driver, key, value){
    let newDriver = Object.assign({}, driver)
    newDriver[key] = value;
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}

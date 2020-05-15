// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({} ,driver ,{[key]:value})
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

const deleteFromDriverByKey = (driver, key, value) => {
    let d =Object.assign({}, driver, {[key]:value})
    delete d[key]
    return d
}

const destructivelyDeleteFromDriverByKey = (driver, key, value) => {
    delete driver[key]
    return driver
}
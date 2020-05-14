// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driverObj,key,value){
    return Object.assign({}, driverObj, {[key]:value})
    
    // const newDriver = {...driverObj}
    // newDriver[key] = value
    // return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
   const newDriver = Object.assign({}, driver)
   delete newDriver[key]
   return newDriver
    // const newDriver = {...driver}
    // delete newDriver[key]
    // return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
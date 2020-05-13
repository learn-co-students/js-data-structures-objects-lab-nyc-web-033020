// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let d =  {...driver}
  d[key] = value 
  return d
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let d = {...driver}
  delete d[key]
  return d
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
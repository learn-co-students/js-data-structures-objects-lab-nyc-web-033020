const driver = {};

const updateDriverWithKeyAndValue = (driverObj, key, value) => {
	const output = { ...driverObj };
	output[key] = value;
	return output;
};

const destructivelyUpdateDriverWithKeyAndValue = (driverObj, key, value) => {
	driverObj[key] = value;
	return driverObj;
};

const deleteFromDriverByKey = (driverObj, key) => {
	const output = { ...driverObj };
	delete output[key];
	return output;
};

const destructivelyDeleteFromDriverByKey = (driverObj, key) => {
	delete driverObj[key];
	return driverObj;
};

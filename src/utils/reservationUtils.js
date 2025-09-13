/**
 *
 * @param {String} date - a standadized date string to be converted into a string
 * @returns {String} date string
 */
export const convertToDateString = (date = null) =>
  !date
    ? new Date().toISOString().split("T")[0]
    : new Date(date).toISOString().split("T")[0];

/**
 * Adds date with a number
 * @param {String} date - a date string
 * @param {Number} num - a number to increment the day.
 * @returns {String}
 */
export const addDate = (date, num) =>
  new Date(date).setDate(new Date(date).getDate() + num);

// Calculate the difference between two dates
export const calNumberOfDays = (startDate, endDate) => {
  // always return a positive difference
  return Math.abs((endDate - startDate) / (24 * 60 * 60 * 1000));
};

export const pricing = {
  weeklyDiscount: 32,
  cleaningFee: 62,
  serviceFee: 83,
  taxes: 29,
};
export const calculateTotals = (price, numDays) => {
  const stayPrice = price * numDays;
  const total =
    stayPrice -
    pricing.weeklyDiscount +
    pricing.cleaningFee +
    pricing.serviceFee +
    pricing.taxes;
  return { stayPrice, total };
};

/**
 * Submit the data
 * @param {*} data
 */

export const onErrors = (errors) => {
  console.log("Validation errors:", errors);
};

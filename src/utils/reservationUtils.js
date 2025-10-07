import { ROUTES } from "./routes";

/**
 * Converts a date to a standardized YYYY-MM-DD string.
 *
 * @param {string|null} date - Optional date string. Defaults to today.
 * @returns {string} Formatted date string.
 */
export const convertToDateString = (date = null) =>
  !date
    ? new Date().toISOString().split("T")[0]
    : new Date(date).toISOString().split("T")[0];

/**
 * Adds a number of days to a given date.
 *
 * @param {string} date - Base date string.
 * @param {number} num - Number of days to add.
 * @returns {number} Timestamp of the new date.
 */
export const addDate = (date, num) =>
  new Date(date).setDate(new Date(date).getDate() + num);

/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {number} Positive day difference.
 */
export const calNumberOfDays = (startDate, endDate) => {
  // always return a positive difference
  return Math.abs((endDate - startDate) / (24 * 60 * 60 * 1000));
};

/**
 * Static pricing values used in total calculations.
 */

export const pricing = {
  weeklyDiscount: 32,
  cleaningFee: 62,
  serviceFee: 83,
  taxes: 29,
};

/**
 * Calculates stay price and total including fees and discounts.
 *
 * @param {number} price - Price per night.
 * @param {number} numDays - Number of nights.
 * @returns {{ stayPrice: number, total: number }}
 */

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
 * Logs form validation errors to the console.
 *
 * @param {*} errors - Error object from form validation.
 */
export const onErrors = (errors) => {
  console.error("Validation errors:", errors);
};

/**
 * Navigation menu items for host and user roles.
 */
export const filterArr = {
  hostMenu: [
    {
      title: "View Reservations",
      url: ROUTES.reservations,
    },
    {
      title: "View Listings",
      url: ROUTES.manageListings,
    },
    {
      title: "Create a Listing",
      url: ROUTES.createListing,
    },
    {
      title: "Update Profile",
      url: ROUTES.profile,
    },
  ],
  userMenu: [
    {
      title: "View Reservations",
      url: ROUTES.reservations,
    },
    {
      title: "Reserve an Accommodation",
      url: ROUTES.viewLocations,
    },
    {
      title: "Update Profile",
      url: ROUTES.profile,
    },
  ],
};

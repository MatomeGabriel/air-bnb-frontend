import { format } from "date-fns";

/**
 * Formats an ISO date string or Date object to DD/MM/YYYY
 * @param {string | Date} date - ISO string or Date instance
 * @returns {string} - Formatted date as DD/MM/YYYY
 */
export function formatDate(date) {
  if (!date) return "";
  try {
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return format(parsedDate, "dd/MM/yyyy");
  } catch (err) {
    console.error("Invalid date passed to formatDate:", date);
    return "";
  }
}

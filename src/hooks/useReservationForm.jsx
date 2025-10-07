import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  addDate,
  calculateTotals,
  calNumberOfDays,
  convertToDateString,
} from "../utils/reservationUtils";

/**
 * useReservationForm
 * Custom hook for managing reservation form state and calculating totals.
 * Initializes default check-in/check-out dates and updates pricing dynamically.
 *
 * @param {number} price - Price per night for the reservation
 * @param {Function} onUpdate - Callback to update external state with total and number of days
 * @returns {Object} - Contains:
 *   - register: Function to register form inputs
 *   - handleSubmit: Function to handle form submission
 *   - errors: Object containing form validation errors
 *   - checkIn: Current check-in date string
 *   - checkOut: Current check-out date string
 *   - numDays: Number of nights between check-in and check-out
 *   - totals: Object with calculated total price and breakdown
 *   - today: Today's date string (used as default check-in)
 */
export const useReservationForm = (price, onUpdate) => {
  const today = convertToDateString();
  const futureDate = convertToDateString(addDate(today, 3));

  const [numDays, setNumDays] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      checkIn: today,
      checkOut: futureDate,
    },
  });

  // Values to watch
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  useEffect(() => {
    if (checkIn && checkOut) {
      const days = calNumberOfDays(new Date(checkIn), new Date(checkOut));
      setNumDays(days);
      const newTotals = calculateTotals(price, days);
      if (onUpdate) onUpdate({ total: newTotals.total, numDays: days });
    }
  }, [checkIn, checkOut, price, onUpdate]);

  const totals = calculateTotals(price, numDays);
  return {
    register,
    handleSubmit,
    errors,
    checkIn,
    checkOut,
    numDays,
    totals,
    today,
  };
};

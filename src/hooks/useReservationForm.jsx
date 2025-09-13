import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  addDate,
  calculateTotals,
  calNumberOfDays,
  convertToDateString,
} from "../utils/reservationUtils";

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

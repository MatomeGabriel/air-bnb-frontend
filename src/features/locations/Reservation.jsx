import styled from "styled-components";

import { useReservationsContext } from "../../context/ReservationContext";
import {
  boxShadow,
  colors,
  flexColumnCenter,
  radii,
  spacing,
} from "../../design-system";
import { FlexColumn, FlexRow } from "../../ui/Flex";
import { TextBase, TextLg, TextSm } from "../../ui/Paragraphs";
import { StarOutlineIcon } from "../../ui/Icons";
import Middot from "../../ui/Middot";
import { ButtonPrimarySmFull } from "../../ui/Buttons";
import FormRow from "../../ui/FormRow";

import {
  convertToDateString,
  onErrors,
  pricing,
} from "../../utils/reservationUtils";
import { useReservationForm } from "../../hooks/useReservationForm";
import { queryClientManager } from "../../utils/queryClientManager";
import { extractError } from "../../utils/extractData";
import { ROUTES } from "../../utils/routes";

const StyledReservation = styled(FlexColumn)`
  position: sticky;
  top: 9rem;
  padding: ${spacing.lg};
  box-shadow: ${boxShadow.lg};
  gap: ${spacing.base};
  width: 40rem;
  border-radius: ${radii.sm};
  border: 1px solid ${colors["gray-200"]};
  align-items: stretch;
  align-self: flex-start;
  background-color: ${colors.white};
`;

const ReservationPricingTable = styled(FlexColumn)`
  gap: ${spacing["sm-md"]};
  padding-bottom: ${spacing.base};
  border-bottom: 1px solid ${colors["gray-200"]};
  width: 100%;
`;
const ReservationTableRow = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
`;

const ReservationForm = styled.form`
  ${flexColumnCenter};
  width: 100%;
`;

const Reservation = ({
  reservationRef,
  isMobile,
  location = [],
  onUpdate,
  sentinelRef,
}) => {
  const { price, reviews, rating } = location;

  const { register, handleSubmit, errors, checkIn, numDays, totals, today } =
    useReservationForm(price, onUpdate);

  const { stayPrice, total } = totals;
  const {
    reserveAccommodation,
    isReservingAccommodation,
    reservationError,
    reservations,
  } = useReservationsContext();

  const { __v, _id, maxGuests, ...loc } = location;

  const submitReservation = (data) => {
    data.checkIn = new Date(data.checkIn);
    data.checkOut = new Date(data.checkOut);

    const appendedData = {
      ...data,
      ...loc,
      ...pricing,
      specificRatings: {
        cleanliness: 4.8,
        communication: 4.8,
        checkIn: 4.8,
        accuracy: 4.8,
        location: 4.8,
        value: 4.8,
      },
    };

    reserveAccommodation(appendedData, {
      onSuccess: () => {
        queryClientManager.invalidate.reservations;
        queryClientManager.toast.success(
          <a
            href={ROUTES.reservations}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4f46e5", textDecoration: "underline" }}
          >
            View Reservations
          </a>
        );
      },
      onErrors: (err) => {
        queryClientManager.toast.error(extractError(err) || err);
      },
    });
  };

  if (isReservingAccommodation) return <p>Still Loading...</p>;

  console.log(reservations);

  return (
    <StyledReservation ref={!isMobile && reservationRef}>
      <FlexRow $justify="space-between" $width="100%">
        <FlexRow $gap="xs">
          <TextLg $weight="medium">${price}</TextLg>
          <TextBase>/ night</TextBase>
        </FlexRow>
        <FlexRow $gap="sm">
          <FlexRow $gap="xs">
            <StarOutlineIcon />
            <TextSm>{rating}</TextSm>
          </FlexRow>
          <Middot $color="gray-500" />
          <TextSm $textDecoration="underline">{reviews} reviews</TextSm>
        </FlexRow>
      </FlexRow>
      <FlexColumn>
        <ReservationForm
          onSubmit={handleSubmit(submitReservation, () => onErrors(errors))}
        >
          <FlexRow $width="100%">
            <FormRow label="CHECK-IN" $width="100%">
              <input
                style={{
                  borderRadius: `${radii.sm} 0 0 0`,
                  borderBottom: "none",
                  border: errors.checkIn ? "2px solid red" : "",
                }}
                type="date"
                id="checkIn"
                min={today}
                {...register("checkIn", { required: true })}
              />
            </FormRow>
            <FormRow label="CHECK-OUT" $width="100%">
              <input
                style={{
                  borderRadius: ` 0 ${radii.sm} 0 0`,
                  borderBottom: "none",
                  borderLeft: "none",
                }}
                type="date"
                id="checkOut"
                min={convertToDateString(
                  new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)
                )}
                {...register("checkOut", { required: true })}
              />
            </FormRow>
          </FlexRow>
          <FormRow label="GUESTS" $width="100%">
            <select
              style={{ borderRadius: `0  0 ${radii.sm} ${radii.sm}` }}
              id="guests"
              defaultValue=" "
              {...register("guests", { required: true })}
            >
              {Array.from({ length: Number(maxGuests) }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} guests
                </option>
              ))}
            </select>
          </FormRow>
          <ButtonPrimarySmFull type="submit">Reserve</ButtonPrimarySmFull>
          <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />
        </ReservationForm>
      </FlexColumn>

      <TextSm style={{ alignSelf: "center" }} $color="gray-500">
        You won’t be charged yet
      </TextSm>
      <ReservationPricingTable>
        <ReservationTableRow>
          <TextBase>
            ${price} x {numDays} nights
          </TextBase>
          <TextBase>${stayPrice}</TextBase>
        </ReservationTableRow>
        <ReservationTableRow>
          <TextBase>Weekly discount</TextBase>
          <TextBase $color="green">-${pricing.weeklyDiscount}</TextBase>
        </ReservationTableRow>
        <ReservationTableRow>
          <TextBase>Cleaning fee</TextBase>
          <TextBase>${pricing.cleaningFee}</TextBase>
        </ReservationTableRow>
        <ReservationTableRow>
          <TextBase>Service fee</TextBase>
          <TextBase>${pricing.serviceFee}</TextBase>
        </ReservationTableRow>
        <ReservationTableRow>
          <TextBase>Occupancy taxes and fees</TextBase>
          <TextBase>${pricing.taxes}</TextBase>
        </ReservationTableRow>
      </ReservationPricingTable>
      <ReservationTableRow>
        <TextBase $weight="medium">Total</TextBase>
        <TextBase $weight="medium">${total}</TextBase>
      </ReservationTableRow>
    </StyledReservation>
  );
};

export default Reservation;

/**
 * const [numDays, setNumDays] = useState(0);

  const today = convertToDateString();
  const futureDate = convertToDateString(addDate(today, 3));

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      checkIn: convertToDateString(today),
      checkOut: convertToDateString(futureDate),
    },
  });

  // Values to watch
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  // Set number of days
  useEffect(() => {
    if (checkIn && checkOut) {
      setNumDays(() => calNumberOfDays(new Date(checkIn), new Date(checkOut)));
    }
  }, [checkIn, checkOut]);

  const { stayPrice, total } = calculateTotals(price, numDays);
 */

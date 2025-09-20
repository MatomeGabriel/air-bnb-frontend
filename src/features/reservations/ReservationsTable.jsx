import styled from "styled-components";
import { useReservationsContext } from "../../context/ReservationContext";
import { breakpoints, colors, spacing, typography } from "../../design-system";
import { Spinner } from "../../ui/Spinners";
import { ButtonSolidMd } from "../../ui/Buttons";
import { FlexColumn } from "../../ui/Flex";
import { formatDate } from "../../utils/formatDate";

const Table = styled.table`
  width: 100%;
  border: 0;
  /* Removes default borders and collapses cell spacing for a cleaner look. */
  border-collapse: collapse;
  /* Forces equal column widths regardless of content—great for consistency and truncation. */
  table-layout: fixed;
  /* Resets spacing to avoid unexpected gaps. */
  margin: 0;
  padding: 0;

  caption {
    font-size: ${typography.sizes.xl};
    margin: ${spacing.base} 0;
  }

  /*  Visually hides the table header on mobile.
      Keeps it accessible for screen readers.
  */
  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  tr {
    display: block;
    margin-bottom: ${spacing.md};
    border-bottom: 3px solid ${colors.border};
    background-color: ${colors.surface};
    padding: ${spacing.md};
  }

  td {
    display: block;
    text-align: right;
    font-size: ${typography.sizes.sm};
    padding: ${spacing.md};
    border-bottom: 1px solid #ddd;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }

  th {
    font-size: ${typography.sizes.sm};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: ${spacing.md};
    text-align: start;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    border: 1px solid #ccc;

    caption {
      font-size: ${typography.sizes["2xl"]};
      margin: ${spacing.lg} 0;
    }

    thead {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      padding: 0;
      position: static;
      width: auto;
      border: 1px solid #ddd;
    }
    th,
    td {
      border: 1px solid #c8c8c8;
    }

    tr {
      display: table-row;
      border: 1px solid #c8c8c8;
      background-color: ${colors.white};
    }

    td {
      display: table-cell;
      text-align: start;
      font-size: ${typography.sizes.base};
      border-bottom: none;

      &::before {
        content: none;
      }
    }

    th {
      display: table-cell;
    }
  }
`;
const TableData = styled.td`
  ${FlexColumn};
  border: none;
  justify-content: space-between;
  align-items: start;
  gap: ${spacing.md};
`;
const ReservationsTable = () => {
  const {
    reservations,
    isFetchingReservations,
    reservationsError,
    deleteAccommodationReservation,
    isDeletingReservation,
    deleteReservationError,
  } = useReservationsContext();

  if (isFetchingReservations) return <Spinner />;
  if (reservationsError) return <div>Error loading reservations</div>;
  if (!reservations || reservations.length === 0)
    return <div>No reservations found</div>;

  return (
    <Table>
      <caption>My Reservations</caption>
      <thead>
        <tr>
          <th scope="col">Booked by</th>
          <th scope="col">Property</th>
          <th scope="col">Checkin</th>
          <th scope="col">Checkout</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through reservations and create a row for each */}
        {reservations.map((reservation) => (
          <tr>
            <td data-label="Booked by">{reservation.user}</td>
            <td data-label="Property">{reservation.title}</td>
            <td data-label="Checkin">{formatDate(reservation.checkIn)}</td>
            <td data-label="Checkout">{formatDate(reservation.checkOut)}</td>
            <TableData data-label="Actions">
              <ButtonSolidMd
                $width="100%"
                $radius="md"
                $color="danger"
                onClick={() => {
                  console.log(reservation._id);
                  deleteAccommodationReservation(reservation._id);
                }}
              >
                Delete
              </ButtonSolidMd>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReservationsTable;

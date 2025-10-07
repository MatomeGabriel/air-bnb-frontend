import UseDeleteHosting from "../../hooks/useDeleteHosting";
import { ROUTES } from "../../utils/routes";
import { useConfirm } from "../../context/ConfirmContext";
import { useNavigate } from "react-router-dom";
import { column, Row } from "../../design-system";
import styled from "styled-components";
import { ButtonPrimaryMdFull, ButtonSolidMd } from "../../ui/Buttons";

const StyledActionButtons = styled.div`
  ${({ $mobile }) => ($mobile ? Row : column)};
  width: 100%;
  max-width: 30rem;
  gap: 1.6rem;
`;

/**
 * ButtonActions
 *
 * Renders action buttons for  deleting a listing.
 * Only displays buttons when the current route is "/listings".
 * Integrates confirmation modal before deletion and handles navigation.
 *
 * @param {Object} props
 * @param {string} props._id - Unique ID of the listing
 * @param {string} [props.$size] - Optional size modifier (not used directly here)
 * @param {boolean} [props.$mobile=false] - Determines layout direction (row for mobile, column otherwise)
 *
 * @returns {JSX.Element|null} Action buttons UI or null if not on "/listings" route
 *
 * @example
 * <ButtonActions _id="abc123" $mobile={true} />
 */
const ButtonActions = ({ _id, $size, $mobile = false }) => {
  const { onDeleteHosting, isDeletingHostListing, isListings } =
    UseDeleteHosting();
  const navigate = useNavigate();
  const { requestConfirm } = useConfirm();

  return isListings ? (
    <StyledActionButtons $mobile={$mobile}>
      <ButtonSolidMd
        $bgColor="gray-500"
        $radius="xs"
        $width="100%"
        $color="blue"
        onClick={() => navigate(`${ROUTES.editListings}/${_id}`)}
      >
        Update
      </ButtonSolidMd>
      <ButtonSolidMd
        $bgColor="gray-500"
        $radius="xs"
        $width="100%"
        $color="danger"
        disabled={isDeletingHostListing ? true : false}
        onClick={() =>
          requestConfirm({
            message: "Are you sure you want to delete this listing?",
            warningTitle: "Warning: Permanent Listing Deletion!",
            warningMessage:
              "This action is irreversible. Once the listing is deleted, it cannot be recovered.",
            onConfirm: () => onDeleteHosting(_id),
            onCancel: () => {
              console.error("Cancelled");
            },
          })
        }
      >
        Delete
      </ButtonSolidMd>
    </StyledActionButtons>
  ) : null;
};

export default ButtonActions;

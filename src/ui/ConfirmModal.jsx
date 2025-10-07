import styled from "styled-components";
import {
  boxShadow,
  colors,
  flexColumnStart,
  flexRowBetween,
  flexRowCenter,
  radii,
  spacing,
} from "../design-system/index";
import { TextBase, TextSm } from "../ui/Paragraphs";
import { ButtonOutlineDarkSm, ButtonSolidSm } from "./Buttons";
import { WarningIcon } from "./Icons";

import { FlexRow } from "../ui/Flex";

/**
 * Backdrop
 * Full-screen overlay behind the modal.
 * Centers modal content and dims background with semi-transparent black.
 */
const Backdrop = styled.div`
  ${flexRowCenter}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;
/**
 * Modal
 * Main modal container with padding, shadow, and vertical layout.
 * Used to display confirmation messages and optional warnings.
 */
const Modal = styled.div`
  ${flexColumnStart};
  gap: ${spacing.lg};
  min-width: 30rem;
  max-width: 52rem;
  padding: ${spacing["2xl"]} ${spacing.xl};
  box-shadow: ${boxShadow.lg};
  border-radius: ${radii.sm};
  background-color: ${colors.white};
`;

/**
 * ButtonBox
 * Horizontal container for action buttons.
 * Aligns confirm and cancel buttons side by side.
 */
const ButtonBox = styled.div`
  ${flexRowBetween};
  width: 100%;
`;

/**
 * WarningBox
 * Styled alert box for displaying warning messages.
 * Includes icon, title, and description with visual emphasis.
 */
const WarningBox = styled.div`
  ${flexColumnStart};
  gap: ${spacing.sm};
  border-radius: ${radii.sm};
  width: 100%;
  border-left: 4px solid #fa703f;
  padding: ${spacing.base};
  background-color: #ffe9d9;
`;

/**
 * ConfirmModal
 * Reusable confirmation modal with optional warning section.
 *
 * @param {Object} props
 * @param {string} props.message - Main confirmation message.
 * @param {Function} props.onConfirm - Callback for confirming the action.
 * @param {Function} props.onCancel - Callback for cancelling the action.
 * @param {string} [props.warningMessage] - Optional warning description.
 * @param {string} [props.warningTitle] - Optional warning title.
 *
 * @returns {JSX.Element} A styled modal with confirm/cancel buttons.
 *
 * Features:
 * - Full-screen backdrop
 * - Optional warning section with icon
 * - Styled buttons for user actions
 */
const ConfirmModal = ({
  message,
  onConfirm,
  onCancel,
  warningMessage,
  warningTitle,
}) => {
  return (
    <Backdrop>
      <Modal>
        <TextBase>{message}</TextBase>
        {warningMessage && (
          <WarningBox>
            <FlexRow>
              <WarningIcon />
              <TextBase $weight="bold">
                {warningTitle || "Warning: Permanent Deletion"}
              </TextBase>
            </FlexRow>
            <TextSm>{warningMessage}</TextSm>
          </WarningBox>
        )}
        <ButtonBox>
          <ButtonSolidSm onClick={onConfirm}>Yes, continue</ButtonSolidSm>
          <ButtonOutlineDarkSm onClick={onCancel}>
            No, cancel
          </ButtonOutlineDarkSm>
        </ButtonBox>
      </Modal>
    </Backdrop>
  );
};

export default ConfirmModal;

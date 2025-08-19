import styled from "styled-components";
import {
  boxShadow,
  colors,
  flexColumnCenter,
  flexColumnStart,
  flexRowBetween,
  flexRowCenter,
  radii,
  spacing,
} from "../design-system/index";
import { TextBase, TextSm } from "../ui/Paragraphs";
import FormContainer from "../ui/FormContainer";
import FormHeader from "../ui/FormHeader";
import { ButtonOutlineDarkSm, ButtonSolidSm } from "./Buttons";
import { WarningIcon } from "./Icons";

import { FlexRow } from "../ui/Flex";
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
//  redo this
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

const ButtonBox = styled.div`
  ${flexRowBetween};
  width: 100%;
`;
const WarningBox = styled.div`
  ${flexColumnStart};
  gap: ${spacing.sm};
  border-radius: ${radii.sm};
  width: 100%;
  border-left: 4px solid #fa703f;
  padding: ${spacing.base};
  background-color: #ffe9d9;
`;

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

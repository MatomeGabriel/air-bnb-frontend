import styled from "styled-components";
import { FlexColumn } from "../../ui/Flex";
import FormContainer from "../../ui/FormContainer";
import FormHeader from "../../ui/FormHeader";
import { TextBase, TextXs } from "../../ui/Paragraphs";
import { H3 } from "../../ui/Heading";
import { CloudUploadIcon, NullIcon, ProfileUploadIcon } from "../../ui/Icons";
import {
  flexRowBetween,
  flexRowCenter,
  generateResponsiveStyles,
  radii,
  spacing,
} from "../../design-system";
import {
  ButtonOutlineDarkMdFull,
  ButtonSolidDarkMdFull,
} from "../../ui/Buttons";
import StyledLink from "../../ui/StyledLink";
import { useRef } from "react";
import useImagePreview from "../../hooks/useImagePreview";
import { useAuth } from "../../context/AuthContext";
import { generateImgURL } from "../../utils/generateImgURL";
import { ROUTES } from "../../utils/routes";
import { useNavigate } from "react-router-dom";

const StepText = styled(TextXs)`
  text-transform: uppercase;
  letter-spacing: 2%;
`;

const IconBox = styled.div`
  ${flexRowCenter}
  width: 100%;
  flex: 1;
`;
const ButtonContent = styled.div`
  ${flexRowBetween}
  width: 100%;
`;
const ProfileImageColumn = styled(FlexColumn)`
  gap: 7.2rem;
  padding: 2.4rem;
`;

const TextBox = styled(FlexColumn)`
  ${generateResponsiveStyles("padding", {
    sm: `0 ${spacing.md}`,
    md: `0 ${spacing.xl}`,
  })}
`;

const Img = styled.img`
  object-fit: cover;
  width: 17.2rem;
  height: 17.2rem;
  border-radius: ${radii.full};
`;
const ProfileImage = () => {
  const inputFileRef = useRef(null);
  const { user } = useAuth();
  const { updateUserProfileImage, isUploadingProfileImage } = useAuth();
  const { readFile, previewSrc, error, file } = useImagePreview();
  const navigate = useNavigate();

  const onUpdateProfileImage = (file) => {
    updateUserProfileImage(file, {
      onSuccess: () => {
        navigate(ROUTES.home);
      },
    });
  };
  return (
    <FormContainer>
      <FormHeader $showIcon={false}>Create your profile</FormHeader>
      <ProfileImageColumn>
        <input
          type="file"
          accept="image/*"
          ref={inputFileRef}
          style={{ display: "none" }}
          onChange={readFile}
        />
        <FlexColumn $gap="xl">
          <TextBox $align="center" $gap="sm">
            {/* <StepText>Step 2 of 2</StepText> */}
            <H3>Add a profile photo</H3>
            <TextBase $textAlign="center">
              Pick an image that shows your face. Hosts won’t be able to see
              your profile photo until your reservation is confirmed.
            </TextBase>
          </TextBox>
          <IconBox>
            {!previewSrc && <Img src={generateImgURL(user.photo)} />}
            {previewSrc && <Img src={previewSrc} />}
          </IconBox>
        </FlexColumn>
        {!previewSrc ? (
          <FlexColumn $width="100%" $align="center" $gap="base">
            <ButtonSolidDarkMdFull
              $radius="sm"
              onClick={() => inputFileRef.current?.click()}
            >
              <ButtonContent>
                <CloudUploadIcon />
                <span>Upload photo</span>
                <NullIcon />
              </ButtonContent>
            </ButtonSolidDarkMdFull>
            <StyledLink $colorTheme="dark" to={ROUTES.home}>
              I'll do this later
            </StyledLink>
          </FlexColumn>
        ) : (
          <FlexColumn $width="100%" $align="center" $gap="base">
            <ButtonSolidDarkMdFull
              onClick={() => onUpdateProfileImage(file)}
              $radius="sm"
            >
              Done
            </ButtonSolidDarkMdFull>
            <ButtonOutlineDarkMdFull
              onClick={() => inputFileRef.current?.click()}
            >
              Change Photo
            </ButtonOutlineDarkMdFull>
          </FlexColumn>
        )}
      </ProfileImageColumn>
    </FormContainer>
  );
};

export default ProfileImage;

// whne done is clicked
// 1. we update the profile
// 2. invalidate the user to refetch again,
// 3. redirect back to where we where before

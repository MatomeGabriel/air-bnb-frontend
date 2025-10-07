import styled from "styled-components";
import { FlexColumn } from "../../ui/Flex";
import FormContainer from "../../ui/FormContainer";
import FormHeader from "../../ui/FormHeader";
import { TextBase, TextSm, TextXs } from "../../ui/Paragraphs";
import { H3 } from "../../ui/Heading";
import { CloudUploadIcon, NullIcon } from "../../ui/Icons";
import {
  colors,
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
import { ROUTES } from "../../utils/routes";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

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
  /* gap: 7.2rem;
   */
  gap: ${({ showInput }) => (showInput ? "2.4rem" : "7.2rem")};
  width: 100%;
  margin-bottom: ${spacing["2xl"]};
  ${generateResponsiveStyles("margin-bottom", { sm: "0" })}
  padding: 3.2rem;

  & input {
    color: ${colors["gray-500"]} !important;
    text-transform: italic !important;
  }
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
/**
 * ProfileImage
 *
 * Renders a form for uploading and previewing a user's profile image.
 * Handles image selection, preview, upload, and optional display of user info.
 *
 * Behavior:
 * - If no image is selected, shows current user photo and upload button
 * - If image is selected, shows preview with "Done" and "Change Photo" options
 * - On upload success:
 *   - Clears preview
 *   - Redirects to home if `showInput` is false
 * - Displays user info fields (username, name, email) if `showInput` is true
 * - Shows error messages and upload status
 * - Includes logout button when `showInput` is true
 *
 * @param {Object} [profileInfo] - Optional configuration for form content
 * @param {string} [profileInfo.title="Create your profile"] - Form header title
 * @param {string} [profileInfo.text] - Description text under header
 * @param {string} [profileInfo.cancelText="I'll do this later"] - Cancel link text
 * @param {boolean} [profileInfo.showInput=false] - Whether to show user info and logout button
 *
 * @returns {JSX.Element} Profile image upload UI
 */
const ProfileImage = ({
  profileInfo = {
    title: "Create your profile",
    text: `Pick an image that shows your face. Hosts won’t be able to see your profile photo until your reservation is confirmed.`,
    cancelText: "I'll do this later",
  },
}) => {
  const inputFileRef = useRef(null);
  const { user } = useAuth();
  const { logoutUser } = useLogout();
  const { updateUserProfileImage, isUploadingProfileImage } = useAuth();
  const { readFile, previewSrc, error, file, setPreviewSrc } =
    useImagePreview();
  const navigate = useNavigate();

  const onUpdateProfileImage = (file) => {
    updateUserProfileImage(file, {
      onSuccess: () => {
        if (!profileInfo.showInput) {
          navigate(ROUTES.home);
          return;
        }
        setPreviewSrc(null);
      },
    });
  };
  return (
    <FormContainer>
      <FormHeader $showIcon={profileInfo.showInput ? true : false}>
        {profileInfo.title}
      </FormHeader>
      <ProfileImageColumn showInput={profileInfo.showInput}>
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
            <TextBase $textAlign="center">{profileInfo.text}</TextBase>
          </TextBox>
          <IconBox>
            {!previewSrc && <Img src={user.photo} />}
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
              {profileInfo.cancelText}
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
        {profileInfo.showInput && (
          <FlexColumn $width="100%" $gap="md">
            <FlexColumn $width="100%" $gap="sm">
              <label>
                <TextSm $color="gray-600" $weight="bold">
                  Username
                </TextSm>
              </label>
              <input disabled type="text" name="" id="" value={user.username} />
            </FlexColumn>
            <FlexColumn $width="100%" $gap="sm">
              <label for="name">
                <TextSm $color="gray-600" $weight="bold">
                  Name
                </TextSm>
              </label>
              <input disabled type="text" name="" id="name" value={user.name} />
            </FlexColumn>
            <FlexColumn $width="100%" $gap="sm">
              <label for="email">
                <TextSm $color="gray-600" $weight="bold">
                  Email
                </TextSm>
              </label>
              <input
                disabled
                type="email"
                name=""
                id="email"
                value={user.email}
              />
            </FlexColumn>
          </FlexColumn>
        )}

        <FlexColumn $align="center" $gap="xs" $justify="center">
          {error && <TextXs $color="error">{error}</TextXs>}
          <TextXs $color="gray-500">
            Supported file types: JPG, PNG, GIF. Max size 5MB.
          </TextXs>
        </FlexColumn>
        {isUploadingProfileImage && (
          <TextXs $color="gray-500">Uploading image...</TextXs>
        )}
        {profileInfo.showInput && (
          <FlexColumn $width="100%" $align="center" $gap="xs" $justify="center">
            <ButtonOutlineDarkMdFull onClick={logoutUser}>
              Log out
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

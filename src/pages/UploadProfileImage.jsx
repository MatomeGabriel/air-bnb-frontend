import ProfileImage from "../features/authentication/ProfileImage";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";
import styled from "styled-components";
import { flexRowCenter, generateResponsiveStyles } from "../design-system";
import { useAuth } from "../context/AuthContext";
import { filterArr } from "../utils/reservationUtils";

const Container = styled.div`
  ${flexRowCenter}
  width: 100%;
  overflow: scroll;
  ${generateResponsiveStyles("padding", { sm: "4.8rem 1.2rem" })};
`;
/**
 * UploadProfileImage
 *
 * Page component for uploading and previewing a user's profile image.
 * Renders the main menu and profile image upload form, with optional menu filters.
 *
 * Usage:
 *   <UploadProfileImage profileInfo={profileInfo} />
 *
 * Props:
 *   @param {Object} profileInfo - Customizes the profile image form and menu filters
 *   @param {boolean} [profileInfo.hideMenuFilters] - If true, shows menu filters based on user role
 *
 * @returns {JSX.Element} The profile image upload page UI
 */

const UploadProfileImage = ({ profileInfo }) => {
  const { user } = useAuth();
  const showMenuFilters = profileInfo?.hideMenuFilters ? true : false;

  return (
    <>
      <Header>
        <MainMenu
          filterArr={
            showMenuFilters
              ? user.role === "host"
                ? filterArr.hostMenu
                : filterArr.userMenu
              : []
          }
        />
      </Header>
      <Container>
        <ProfileImage profileInfo={profileInfo} />
      </Container>
    </>
  );
};

export default UploadProfileImage;

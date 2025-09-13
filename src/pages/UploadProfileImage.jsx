import ProfileImage from "../features/authentication/ProfileImage";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";
import styled from "styled-components";
import { flexRowCenter, generateResponsiveStyles } from "../design-system";

const Container = styled.div`
  ${flexRowCenter}
  width: 100%;
  overflow: scroll;
  ${generateResponsiveStyles("padding", { sm: "4.8rem 1.2rem" })};
`;
const UploadProfileImage = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>
      <Container>
        <ProfileImage />
      </Container>
    </>
  );
};

export default UploadProfileImage;

import styled from "styled-components";
import FormContainer from "../ui/FormContainer";
import { flexRowStartCenter, radii } from "../design-system";
import { FlexColumn, FlexRow } from "../ui/Flex";
import { TextXs } from "../ui/Paragraphs";
import { Container } from "../ui/Container";

const ProfileImgBox = styled.div`
  ${flexRowStartCenter};
  gap: 1.6rem;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid red;
`;
const Img = styled.img`
  object-fit: cover;
  width: 7rem;
  height: 7rem;
  border-radius: ${radii.full};
`;

const ProfilePage = () => {
  return (
    <div>
      <Container $padding="base">
        <FlexColumn>
          <ProfileImgBox>
            <Img />
            <FlexColumn>
              <TextXs>Your name</TextXs>
              <TextXs>yourname@gmail.com</TextXs>
            </FlexColumn>
          </ProfileImgBox>
          <nav>
            <ul>
              <li>
                <button>
                  <FlexRow $gap="xs">
                    <span>icon</span>
                    <span>My Profile</span>
                  </FlexRow>
                  <span>icon</span>
                </button>
              </li>
            </ul>
          </nav>
        </FlexColumn>
      </Container>
    </div>
  );
};

export default ProfilePage;

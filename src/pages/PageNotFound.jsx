import styled from "styled-components";
import Img404 from "../assets/404.png";
import { flexColumnCenterStart, flexRowCenter } from "../design-system";
import { TextBase } from "../ui/Paragraphs";
import { H3 } from "../ui/Heading";
import MainMenu from "../ui/MainMenu";
import { Header } from "../ui/Header";
import StyledLink from "../ui/StyledLink";
import { ROUTES } from "../utils/routes";

const StyledPageNotFound = styled.div`
  ${flexRowCenter};
  width: 96.4rem;
  gap: 4rem;
  margin: 2.4rem auto;
`;

const Img = styled.img`
  width: 46.4rem;
`;

const StyledContent = styled.div`
  ${flexColumnCenterStart};
  flex: 1;
  gap: 2rem;
`;
const ErrorHeading = styled(H3)`
  font-size: 6.4rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
`;
const PageNotFound = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>

      <StyledPageNotFound>
        <Img src={Img404} />
        <StyledContent>
          <div>
            {" "}
            <ErrorHeading>404</ErrorHeading>
            <ErrorHeading>not found</ErrorHeading>
          </div>

          <TextBase $color="gray-500">
            We couldn't find the place you're looking for. It might have been
            removed or never existed
          </TextBase>
          <StyledLink to={ROUTES.home}>Go back home</StyledLink>
        </StyledContent>
      </StyledPageNotFound>
    </>
  );
};

export default PageNotFound;

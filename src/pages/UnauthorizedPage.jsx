import React from "react";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";
import { H1, H2 } from "../ui/Heading";
import { MainContainer } from "../ui/MainContainer";
import { TextBase } from "../ui/Paragraphs";
import { FlexColumn } from "../ui/Flex";
import StyledLink from "../ui/StyledLink";
import { ROUTES } from "../utils/routes";

/**
 * UnauthorizedPage
 * Displays a message when a user tries to access a restricted route.
 * Includes a header, explanatory text, and a link back to the homepage.
 *
 * @returns {JSX.Element}
 */
const UnauthorizedPage = () => {
  return (
    <>
      <Header>
        <MainMenu />
      </Header>
      <MainContainer>
        <FlexColumn $gap="md" $align="center" $justify="center">
          <H1>You are Unauthorized</H1>
          <TextBase>You don’t have permission to view this page.</TextBase>
          <StyledLink to={ROUTES.home}>Go back home</StyledLink>
        </FlexColumn>
      </MainContainer>
    </>
  );
};

export default UnauthorizedPage;

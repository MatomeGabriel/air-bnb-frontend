import { flexRowCenter, generateResponsiveStyles } from "../design-system";
import CreateLoginForm from "../features/authentication/CreateLoginForm";
import CreateSignupForm from "../features/authentication/CreateSignupForm";
import styled from "styled-components";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";

/**
 * Container
 * A horizontally centered layout for login/signup forms.
 * Applies responsive padding and scroll overflow.
 */
const Container = styled.div`
  ${flexRowCenter}
  width: 100%;
  overflow: scroll;
  ${generateResponsiveStyles("padding", { sm: "4.8rem 1.2rem" })};
`;

/**
 * Login
 * Renders either the login or signup form based on the `type` prop.
 * Includes a dark-themed header and main menu.
 *
 * @param {Object} props
 * @param {"login"|"signup"} props.type - Determines which form to render.
 * @param {string} [props.message] - Optional message passed to the signup form.
 * @returns {JSX.Element}
 */
const Login = ({ type, message, isHost = "user" }) => {
  return (
    <>
      <Header>
        <MainMenu $theme="dark" />
      </Header>
      <Container>
        {type === "login" && <CreateLoginForm />}
        {type === "signup" && (
          <CreateSignupForm message={message} isHost={isHost} />
        )}
      </Container>
    </>
  );
};

export default Login;

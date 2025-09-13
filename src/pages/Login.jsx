import { flexRowCenter, generateResponsiveStyles } from "../design-system";
import CreateLoginForm from "../features/authentication/CreateLoginForm";
import CreateSignupForm from "../features/authentication/CreateSignupForm";
import styled from "styled-components";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";

const Container = styled.div`
  ${flexRowCenter}
  width: 100%;
  overflow: scroll;
  ${generateResponsiveStyles("padding", { sm: "4.8rem 1.2rem" })};
`;

const Login = ({ type, message }) => {
  return (
    <>
      <Header>
        <MainMenu $theme="dark" />
      </Header>
      <Container>
        {type === "login" && <CreateLoginForm />}
        {type === "signup" && <CreateSignupForm message={message} />}
      </Container>
    </>
  );
};

export default Login;

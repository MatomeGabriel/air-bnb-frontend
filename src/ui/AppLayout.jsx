import { Outlet } from "react-router-dom";
import MainNav from "../../../../the-wild-oasis/src/ui/MainNav";
import HeroSection from "./HeroSection";
import styled from "styled-components";
import { flexColumnCenter, spacing } from "../design-system";

const Header = styled.header`
  ${flexColumnCenter}
  gap: ${spacing.lg}
`;

/**
 * AppLayout
 * Wraps the main navigation and hero section at the top,
 * and renders nested routes via <Outlet />.
 *
 * @returns {JSX.Element} The main layout structure for the app.
 */
const AppLayout = () => {
  return (
    <div>
      <Header>
        <MainNav />
        <HeroSection />
      </Header>
      <Outlet />
    </div>
  );
};

export default AppLayout;

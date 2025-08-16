import styled from "styled-components";
import { column } from "../design-system";
import { Header } from "../ui/Header";
import MainMenu from "../ui/MainMenu";
import LocationHeader from "../features/locations/LocationHeader";
import LocationImages from "../features/locations/LocationImages";
import { useSelectedLocationContext } from "../context/SelectedLocationContext";

const Container = styled.main`
  padding: 2.4rem 16rem 6.4rem 16rem;
  gap: 4rem;
  ${column};
`;
const Location = () => {
  const { location } = useSelectedLocationContext();
  console.log(location);
  return (
    <>
      <Header>
        <MainMenu />
      </Header>
      <Container>
        <LocationHeader />
        <LocationImages />
      </Container>
    </>
  );
};

export default Location;

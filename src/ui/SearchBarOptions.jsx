import { useLocationsDataContext } from "../context/LocationsDataContext";

export const LocationsListOptions = ({ showAllLoc = true }) => {
  const { locationsList, isLoadingLocationsSummary } =
    useLocationsDataContext();

  return (
    <>
      {showAllLoc && (
        <option selected value="">
          All Locations
        </option>
      )}
      {isLoadingLocationsSummary && <option>Loading...</option>}
      {/* This options will come from the server */}
      {!isLoadingLocationsSummary &&
        locationsList.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
    </>
  );
};

export const LocationsGuestOptions = () => {
  const { locationsGuests, isLoadingLocationsSummary } =
    useLocationsDataContext();

  const genArray = () => {
    if (isLoadingLocationsSummary) return [];
    const max = locationsGuests.maxGuest;
    if (!max || max <= 0) return [];
    return Array.from({ length: max }, (_, i) => i + 1);
  };

  return (
    <>
      {isLoadingLocationsSummary && <option>Loading...</option>}
      {genArray().map((guest) => (
        <option key={guest} value={guest}>
          {guest} {guest === 1 ? "Guest" : "Guests"}
        </option>
      ))}
    </>
  );
};

export const LocationsTypeOptions = () => {
  const { locationsType, isLoadingLocationsSummary } =
    useLocationsDataContext();

  return (
    <>
      {isLoadingLocationsSummary && <option>Loading...</option>}
      {!isLoadingLocationsSummary &&
        locationsType.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
    </>
  );
};

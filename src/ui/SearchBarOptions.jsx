import { useLocationsDataContext } from "../context/LocationsDataContext";

/**
 * LocationsListOptions
 * Renders a list of location options for a <select> element.
 *
 * @param {Object} props
 * @param {boolean} props.showAllLoc - Whether to include "All Locations" as the first option.
 * @returns {JSX.Element}
 */
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

/**
 * LocationsGuestOptions
 * Renders guest count options based on maxGuest from context.
 *
 * @returns {JSX.Element}
 */
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

/**
 * LocationsTypeOptions
 * Renders location type options for a <select> element.
 *
 * @returns {JSX.Element}
 */
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

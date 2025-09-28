import { useLocation } from "react-router-dom";
import { useListings } from "../context/ListingsContext";

const UseDeleteHosting = () => {
  const { deleteHostListing, isDeletingHostListing } = useListings();
  const isListings = useLocation().pathname === "/listings";

  const onDeleteHosting = (_id) => {
    deleteHostListing(_id, {
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return { onDeleteHosting, isDeletingHostListing, isListings };
};

export default UseDeleteHosting;

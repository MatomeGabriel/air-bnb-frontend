import { useNavigate, useLocation } from "react-router-dom";

const UseUpdateQueryParams = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  // creates a params  from the querystring
  const params = new URLSearchParams(search);

  // produces something like this [[key1, val1], [key2, val2]]
  const updateParams = (updates = {}) => {
    Object.entries(updates).forEach(([key, value]) => {
      // if there is a key but no value delete the key
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    navigate(`?${params.toString()}`);
  };
  return { updateParams, params };
};

export default UseUpdateQueryParams;

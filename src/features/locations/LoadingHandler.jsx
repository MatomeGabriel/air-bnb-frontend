import { Spinner } from "../../ui/Spinners";

/**
 * Handles loading, error and data states
 * @param {*} param0
 * @returns
 */
const LoadingHandler = ({ isLoading, error, data, fallback, children }) => {
  if (isLoading) return <Spinner />;
  if (error) return <p>Could not fetch content</p>;
  if (!data || data.length === 0) return fallback || <p>No resuls fould </p>;

  return children(data);
};

export default LoadingHandler;

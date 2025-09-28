import { Spinner } from "./Spinners";

/**
 * LoadingHandler
 *
 * Handles loading, error, and empty data states for async content.
 *
 * Usage:
 *   <LoadingHandler
 *     isLoading={isLoading}
 *     error={error}
 *     data={data}
 *     fallback={<CustomFallback />}
 *   >
 *     {(data) => <YourComponent data={data} />}
 *   </LoadingHandler>
 *
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether data is loading
 * @param {any} props.error - Error object or message
 * @param {any[]|null} props.data - Data to render
 * @param {React.ReactNode} [props.fallback] - Custom fallback for empty data
 * @param {(data: any) => React.ReactNode} props.children - Render function for data
 * @returns {React.ReactNode}
 */
/**
 * LoadingHandler
 *
 * Handles loading, error, and empty data states for async content.
 * Supports both array and non-array data.
 *
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether data is loading
 * @param {any} props.error - Error object or message
 * @param {any[]|Object|null} props.data - Data to render
 * @param {React.ReactNode} [props.fallback] - Custom fallback for empty data
 * @param {(data: any) => React.ReactNode} props.children - Render function for data
 * @returns {React.ReactNode}
 */
const LoadingHandler = ({ isLoading, error, data, fallback, children }) => {
  if (isLoading) return <Spinner />;
  if (error) return <p>Could not fetch content</p>;
  // Handle array and non-array data
  const isEmptyArray = Array.isArray(data) && data.length === 0;
  const isEmptyObject =
    data &&
    typeof data === "object" &&
    !Array.isArray(data) &&
    Object.keys(data).length === 0;

  if (!data || isEmptyArray || isEmptyObject)
    return fallback || <p>No results found</p>;

  return children(data);
};

export default LoadingHandler;

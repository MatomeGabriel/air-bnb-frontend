/**
 * QueryClient instance for React Query.
 *
 * This client manages caching, background updates, and stale data for queries across the app.
 *
 * @see https://tanstack.com/query/latest/docs/framework/react/reference/QueryClient
 *
 * Default options:
 *   - queries.staleTime: 1000ms (data is considered fresh for 1 second)
 */

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    // for production use 3 minutes
    queries: {
      staleTime: 1000,
    },
  },
});

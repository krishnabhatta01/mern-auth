// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: '' });

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
   
  }),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:3002";

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
	endpoints: (builder) => ({
		getMoods: builder.query({
			query: () => "/api/users/",
		}),
	}),
});

export default apiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:3002";

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: baseURI,
		prepareHeaders: (headers, { getState }) => {
			headers.set("Access-Control-Allow-Origin", "*");
			headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
			headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

			return headers;
		},
		mode: "cors",
	}),
	// endpoints: (builder) => ({
	// 	getMoods: builder.query({
	// 		query: () => "/api/users",
	// 	}),
	// }),
	endpoints(build) {
		return {
			getMoods: build.query({ query: () => ({ url: "/api/users", method: "get" }) }),
			mutation: build.mutation({
				query: () => ({ url: "/api/users", method: "post" }),
			}),
		};
	},
});

export default apiSlice;

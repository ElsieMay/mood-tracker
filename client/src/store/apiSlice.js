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
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(),
		mode: "cors",
	}),
	endpoints(builder) {
		return {
			saveMood: builder.query({ query: () => ({ url: "/api/users", method: "get" }) }),
			mutation: builder.mutation({
				query: () => ({ url: "/api/users", method: "post" }),
			}),
		};
	},
});

export default apiSlice;

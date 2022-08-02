import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/index";
import SignUp from "./components/SignUp/index";
import Login from "./components/Login/index";
import Mood from "./pages/Mood";
import Week from "./pages/Week";
import Services from "./pages/Services";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("id_token");
	// return the headers to the context so httpLink can read them
	console.log(token);
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<>
					<Routes>
						<Route exact path="/" element={<Navigate to="/mood-tracker" replace />} />
						<Route path="/mood-tracker" element={<Home />} />
						<Route path="/mood-tracker/signup" element={<SignUp />} />
						<Route path="/mood-tracker/login" element={<Login />} />
						<Route path="/mood-tracker/mood" element={<Mood />} />
						<Route path="/mood-tracker/week" element={<Week />} />
						<Route path="/mood-tracker/services" element={<Services />} />
						<Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
					</Routes>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;

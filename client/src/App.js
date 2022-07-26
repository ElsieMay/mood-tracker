import { Home } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router className="container">
			<Home />
		</Router>
	);
}

export default App;

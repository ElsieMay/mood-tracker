import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router className="container">
			<Navbar />
		</Router>
	);
}

export default App;

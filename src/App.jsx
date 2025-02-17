import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="max-w-6xl mx-auto">
			<Navbar></Navbar>
			<Outlet></Outlet>
		</div>
	);
}

export default App;

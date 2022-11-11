import { useState } from "react";
import "./css/App.css";
import ResponseView from "./components/ResponseView";
import SurveyDashboard from "./components/SurveyDashboard";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App w-100">
			{/* <ResponseView></ResponseView> */}
			<SurveyDashboard></SurveyDashboard>
		</div>
	);
}

export default App;

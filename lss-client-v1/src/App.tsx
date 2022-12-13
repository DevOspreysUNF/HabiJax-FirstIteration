import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home";
import InputQuestion from "./components/InputQuestion";
import "./css/App.css";
import SurveyList from "./components/Surveys/SurveyList";
import ResponseView from "./components/ResponseView";
import SurveyDashboard from "./components/Dashboard/SurveyDashboard";
import Login from "./components/Login";
import SurveyDetail from "./components/Surveys/SurveyDetail";
import QuestionList from "./components/QuestionBank/QuestionList";
import ExportData from "./components/dataExport/ExportData";
import ContactsDashboard from "./components/Contacts/ContactsDashboard";
import ContactDetail from "./components/Contacts/ContactDetail";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/surveys" element={<SurveyList />} />
					<Route path="/questions" element={<QuestionList />} />
					<Route path="/account" element={<Login />} />
					<Route path="/survey-detail/:surveyId" element={<SurveyDetail />} />
					<Route path="/contact-detail/:contactId" element={<ContactDetail />} />
					<Route path="/export/:surveyId" element={<ExportData />} />
					<Route path="/contacts" element={<ContactsDashboard />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;

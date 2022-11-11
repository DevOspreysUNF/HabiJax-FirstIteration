import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home";
import InputQuestion from "./components/InputQuestion";
import "./css/App.css";
import SurveyList from "./components/Surveys/SurveyList";
import ResponseView from "./components/ResponseView";
import SurveyDashboard from "./components/SurveyDashboard";
import Login from "./components/Login";
import SurveyDetail from "./components/Surveys/SurveyDetail";

function App() {


  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveys" element={<SurveyList />} />
          <Route path="/questions" element={<InputQuestion />} />
          <Route path="/account" element={<Login />} />
          <Route path="/survey-detail" element={<SurveyDetail />} />
        </Routes>
      </main>
			<Footer />
      
    </div>
  );

}

export default App;

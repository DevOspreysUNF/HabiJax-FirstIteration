import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import SurveyService from "../../services/SurveyService";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Data } from "./Data";
import { CategoryScale, Chart, LinearScale, BarElement } from "chart.js";

//Get list of surveys, display statistics

function SurveyDashboard() {
	const [surveys, setSurveys] = useState([]);

	useEffect(() => {
		getSurveys();
		console.log(surveys);
	}, []);

	const getSurveys = async () => {
		SurveyService.GetSurveys().then(async (data) => {
			if (data.status == 200) {
				console.log("200 ok");
				setSurveys(await data.json().then((json) => json.result.elements));
			} else {
				switch (data.status) {
					case 401:
						console.log("Unauthorized to view surveys");
						break;
					case 404:
						console.log("Surveys not found");
						break;
					case 500:
						console.log("Internal server error");
						break;
					default:
						console.log("There was an retrieving surveys");
						break;
				}
			}
		});
	};

	const totalResponses = async () => {
		try {
			surveys.forEach((survey) => {
				//Get Survey API call : https://api.qualtrics.com/9d0928392673d-get-survey
				//count += results.responseSets???
			});
		} catch (error) {
			console.error();
		}
	};

	const [chartData, setChartData] = useState({
		labels: Data.map((data) => data.year),
		datasets: [
			{
				label: "Users Gained ",
				data: Data.map((data) => data.userGain),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"#ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	});

	Chart.register(CategoryScale);
	Chart.register(LinearScale);
	Chart.register(BarElement);

	const totalResponsePlaceholder = 67;

	return (
		<>
			<div className="row">
				<div className="col">
					<div className="chart-container">
						<h2 style={{ textAlign: "center" }}>Responses By Month</h2>
						<Bar
							data={chartData}
							options={{
								plugins: {
									title: {
										display: true,
										text: "Users Gained between 2016-2020",
									},
									legend: {
										display: false,
									},
								},
							}}
						/>
					</div>
				</div>
			</div>
			<div className="row text-center" style={{ marginBottom: "10px" }}>
				<div className="col-sm-4">
					<div className="card h-100" style={{ width: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">Total # of Surveys</h5>
							<p className="card-text">{surveys.length}</p>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="card h-100" style={{ width: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">Total # of Responses</h5>
							<p className="card-text">{totalResponsePlaceholder}</p>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="card h-100" style={{ width: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">Responses/Survey</h5>
							<p className="card-text">
								{Math.floor(totalResponsePlaceholder / surveys.length)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row text-center">
				<div className="col-sm-4">
					<div className="card h-100" style={{ width: "18rem" }}>
						<Link to="/contacts">
							<button
								className="btn btn-primary"
								style={{ marginBottom: "10px" }}
							>
								View Contacts
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default SurveyDashboard;

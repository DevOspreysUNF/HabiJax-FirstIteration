import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

//Get list of surveys, display statistics

function SurveyDashboard() {
	const [survey, setSurvey] = useState([]);

	useEffect(() => {
		surveys();
		// console.log(survey);
	}, []);

	const surveys = async () => {
		try {
			const response = await fetch(
				"https://yul1.qualtrics.com/API/v3/surveys",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
					},
				}
			);

			setSurvey(await response.json().then((json) => json.result.elements));
			console.log(survey);
		} catch (error) {
			console.error();
		}
	};

	const totalResponses = async () => {
		try {
			survey.forEach((survey) => {
				//Get Survey API call : https://api.qualtrics.com/9d0928392673d-get-survey
				//count += results.responseSets???
			});
		} catch (error) {
			console.error();
		}
	};

	const totalResponsePlaceholder = 67;

	return (
		<>
			<div className="row text-center">
				<div className="col-sm-4">
					<div className="card h-100" style={{ width: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">Total # of Surveys</h5>
							<p className="card-text">{survey.length}</p>
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
								{Math.floor(totalResponsePlaceholder / survey.length)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SurveyDashboard;

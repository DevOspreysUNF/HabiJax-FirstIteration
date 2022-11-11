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

	return (
		<>
			<div className="row">
				<div className="col">
					<div className="card" style={{ width: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">Total # of Surveys</h5>
							<p className="card-text">{survey.length}</p>
						</div>
					</div>
				</div>
				<div className="col">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Total # of responses</Card.Title>
							<Card.Text>{survey.length}</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Avg Responses/Survey</Card.Title>
							<Card.Text>{survey.length}</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	);
}

export default SurveyDashboard;

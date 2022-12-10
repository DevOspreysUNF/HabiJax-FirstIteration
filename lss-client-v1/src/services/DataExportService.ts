import { json } from "sequelize/types";

export default {
	startResponseExport: (surveyId: string) => {
		var format = {
			format: "csv",
		};
		return fetch(
			`https://iad1.qualtrics.com/API/v3/surveys/${surveyId}/export-responses`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
				},
				body: JSON.stringify(format),
			}
		).then((response) => {
			return response.json().then((data) => data);
		});
	},
	getResponseExportProgress: (surveyId: string, exportProgressId: string) => {
		return fetch(
			`https://iad1.qualtrics.com/API/v3/surveys/${surveyId}/export-responses/${exportProgressId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
				},
			}
		).then((response) => {
			return response.json().then((data) => data);
		});
	},
	getResponseExportFile: (surveyId: string, fileId: string) => {
		return fetch(
			`https://iad1.qualtrics.com/API/v3/surveys/${surveyId}/export-responses/${fileId}/file`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
				},
			}
		);
	},
	getSurveyReponses: (surveyId: string) => {},
};

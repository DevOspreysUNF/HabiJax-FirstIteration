export default {
	startResponseExport: (surveyId: string) => {
		return fetch(
			`https://ca1.qualtrics.com/API/v3/surveys/${surveyId}/export-responses/fileId/file`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
				},
			}
		);
	},
	getResponseExportProgress: (surveyId: string, exportProgressId: string) => {
		return fetch(
			`https://ca1.qualtrics.com/API/v3/surveys/${surveyId}/export-responses/${exportProgressId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
				},
			}
		);
	},
	getResponseExportFile: (surveyId: string, fileId: string) => {
		return fetch(
			`https://ca1.qualtrics.com/API/v3/surveys/${surveyId}/export-responses/${fileId}/file`,
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

import React, { useEffect, useState } from "react";
import DataExportService from "../../services/DataExportService";
import { useParams, useLocation } from "react-router-dom";

const ExportData = (props: any) => {
	const { surveyId } = useParams();
	const location = useLocation();
	const state = location.state;
	const [progressId, setProgressId] = useState("");
	const [percentComplete, setPercentComplete] = useState();
	const [status, setStatus] = useState();
	const [fileId, setFileId] = useState();

	const [message, setMessage] = useState("");

	useEffect(() => {
		if (surveyId) startExport(surveyId);
	}, []);

	/* useEffect(() => {
		const interval = setInterval(() => {
			console.log("checkingStatus");
			checkExportStatus();
		}, 1000);

		return () => clearInterval(interval);
	}, []); */

	const startExport = (surveyId: string) => {
		DataExportService.startResponseExport(surveyId)
			.then((data) => {
				setStatus(data.meta.httpStatus);
				switch (data.meta.httpStatus) {
					case "200 - OK":
						setProgressId(data.result.progressId);
						setStatus(data.result.status);
						setPercentComplete(data.result.percentComplete);

						break;
					case 401:
						setMessage("Unauthorized to export");
						break;
					case 404:
						setMessage("Survey not found");
						break;
					case 500:
						setMessage("Internal server error");
						break;
					default:
						setMessage("There was an error exporting survey responses");
						break;
				}
			})
			.then(checkExportStatus());
	};

	const checkExportStatus = () => {
		console.log(status);
		if (surveyId) {
			DataExportService.getResponseExportProgress(surveyId, progressId).then(
				(data) => {
					setFileId(data.result.fileId);
					setPercentComplete(data.result.percentComplete);
					setStatus(data.result.status);
					if (status == "inProgress") {
						setMessage("Download started . . ." + " " + percentComplete + "%");
					} else if (status == "complete") {
						setMessage("Ready for download!");
					}
				}
			);
		}
		return null;
	};

	const downloadFile = () => {
		console.log("entered download function");
		if (status == "complete" && fileId && surveyId) {
			console.log("download started");
			DataExportService.getResponseExportFile(surveyId, fileId)
				.then((file) => file.blob())
				.then((blob) => {
					var file = window.URL.createObjectURL(blob);
					window.location.assign(file);
				});
		}
	};

	return (
		<>
			<h2>
				Exporting <strong>{state}</strong> Survey Responses
			</h2>
			<button onClick={checkExportStatus}>Check Status</button>
			<button onClick={downloadFile}>Download File</button>
			<h3>{message}</h3>
		</>
	);
};

export default ExportData;

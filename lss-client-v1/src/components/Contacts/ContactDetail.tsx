import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ContactDetail = (props: any) => {
	const [contact, setContact] = React.useState(null);
	const [contactResponse, setContactResponse] = useState([]);
	const { contactId } = useParams();
	const location = useLocation();
	const state = location.state;
	console.log(state);

	useEffect(() => {
		getDirectoryContactHistory();
	}, [contactId]);

	const getDirectoryContactHistory = async () => {
		try {
			const response = await fetch(
				"https://iad1.qualtrics.com/API/v3/directories/POOL_1Ord9YBMEZTDoyk/contacts/" +
					contactId +
					"/history?type=response",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
					},
				}
			);

			setContactResponse(
				await response.json().then((json) => json.result.elements)
			);
		} catch (error) {
			console.error();
		}
		return contactResponse;
	};

	return (
		<>
			<h1>
				Contact Details for <strong>{state}</strong>
			</h1>

			{contactResponse.map((data: any) => {
				return (
					<li key={data.contactId}>
						Response ID: {data.responseId} Survey Id: {data.surveyId} Contact
						ID: {data.contactId}
					</li>
				);
			})}
		</>
	);
};

export default ContactDetail;

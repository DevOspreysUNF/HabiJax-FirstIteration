import React, { useEffect, useState } from "react";
import DataExportService from "../../services/DataExportService";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactsDashboard = (props: any) => {
	const [contact, setContact] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = async () => {
		try {
			const response = await fetch(
				"https://yul1.qualtrics.com/API/v3/directories/POOL_1Ord9YBMEZTDoyk/contacts",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP",
					},
				}
			);

			setContact(await response.json().then((json) => json.result.elements));
		} catch (error) {
			console.error();
		}
		return contact;
	};

	return (
		<>
			<h2>Client Dashboard Placeholder</h2>

			{contact.map((data: any) => {
				return (
					<li key={data.contactId}>
						First Name: {data.firstName} Last name: {data.lastName} Email:{" "}
						{data.email} Contact ID: {data.contactId}
						<button>
							<Link
								to={`/contact-detail/${data.contactId}`}
								state={data.firstName}
							>
								View Details
							</Link>
						</button>
					</li>
				);
			})}
		</>
	);
};

export default ContactsDashboard;

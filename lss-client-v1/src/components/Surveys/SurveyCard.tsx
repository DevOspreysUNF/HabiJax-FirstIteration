import { useState } from "react";


const SurveyCard = (props:any) => {
    // const [status, setStatus] = useState('');
    let status, date;

    if(props.status == true) {
        status = 'Active';
    } else {
        status = 'Inactive';
    }

    date = props.lastModified;
    date = new Date(date);
    let month = date.toLocaleString('default', { month: 'long' });
    let year = date.getFullYear();
    let day = date.getDate();

    return(
        <>
            <h2>{props.name}</h2>
            <ul> 
                <li><strong>Last Updated:</strong> {month} {day}, {year}</li>
                <li><strong>Status:</strong> {status}</li>
            </ul>
        </>
    )
}

export default SurveyCard;
import react, { useState, useEffect } from 'react';
import SurveyCard from './SurveyCard';

const SurveyList = () => {
    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        surveys();
        // console.log(survey);
    }, [])

    // this will be called twice in development mode due to StrictMode re-rendering (leave it)
    const surveys = async () => {
        try {
            const response = await fetch("https://yul1.qualtrics.com/API/v3/surveys", {
            "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            })

            // if(!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            setSurvey(await response.json().then(json => json.result.elements));

        } catch(error) {
            console.error();
        }
    }

    return(
        <>
            <h1>Surveys</h1>
            <button>+ Create New Survey</button>
            <ul>
                {survey.map((data:any) => { // :any temporary fix
                    return(<li key={data.id}>{data.name}
                    <SurveyCard name={data.name} /></li>)
                })}
                
            </ul>
            
        </>
    );
}

export default SurveyList;
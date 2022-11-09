import react, { useState, useEffect } from 'react';

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
                    "X-API-TOKEN": "PUT-YOUR-TOKEN-HERE"
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
                    return(<li key={data.id}>{data.name}</li>)
                })}
            </ul>
        </>
    );
}

export default SurveyList;
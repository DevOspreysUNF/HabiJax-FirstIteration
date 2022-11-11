import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SurveyCard from './SurveyCard';

const SurveyList = () => {
    const [survey, setSurvey] = useState([]);
    const [surveyResponse, setSurveyResponse] = useState([]);
    //console.log(survey);
    //console.log(surveyResponse);

    useEffect(() => {
        surveys();
        //deleteSurvey();
        getResponse();
        console.log(survey);
        //console.log(surveyResponse);
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

    const deleteSurvey = async (surveyId:any) => {
        try {
            const response = await fetch("https://yul1.qualtrics.com/API/v3/surveys/" + surveyId, {
            "method": "DELETE",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            })

        } catch(error) {
            console.error();
        }
        
          
    }

    const getResponse = async () => {
        try {
            const response = await fetch("https://yul1.qualtrics.com/API/v3/surveys/SV_5bEwX7qviWVF7FA", {
            "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            })

            setSurveyResponse(await response.json().then(json => json.result));
            
        } catch(error) {
            console.error();
        }
        return surveyResponse;
        
    }
 
    return(
        <>
            <h1>Surveys</h1>
            <form action="https://unf.co1.qualtrics.com/app/catalog/projects" target="_blank"><button>+ Create New Survey</button></form>
            {/* <ul> */}

                {survey.map((data:any) => { // :any temporary fix
                    return(
                        <span key={data.id} className='surveycard'>
                            <SurveyCard 
                                name={data.name} 
                                status={data.isActive}
                                lastModified={data.lastModified}
                                id={data.id}
                            />
                            <button><a href={`https://unf.co1.qualtrics.com/survey-builder/${data.id}/edit`} target="blank">Edit Survey</a></button>
                            <button><Link to="/survey-detail">View Details</Link></button>
                            <button onClick={() => deleteSurvey(data.id)}>Delete Survey</button>
                        </span>
                    )
                })}
                
            {/* </ul> */}

        </>
    );
}

export default SurveyList;
import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from './QuestionCard';
// import QuestionCard from './QuestionCard';

const QuestionList = () => {
    const [survey, setSurvey] = useState([]);
    const [surveyQ, setSurveyQ] = useState([]);
    
    useEffect(() => {
        surveys();
    }, [])

    const surveys = async() => {
        try {
            const response = await fetch("https://yul1.qualtrics.com/API/v3/surveys", {
            "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            })

            setSurvey(await response.json().then(json => json.result.elements));

        } catch(error) {
            console.error();
        }
    }

    return(
        <>
            <h1>Surveys</h1>
            {survey.map((data:any) => { // :any temporary fix
                return(
                    <QuestionCard key={data.id} survey={data.name} id={data.id} />
                    // <div key={data.id}>
                    //     <h2>{data.name}</h2>
                    //     <p>id: {data.id}</p>
                    // </div>
                )
            })}
            
        </>
    )
}

export default QuestionList;
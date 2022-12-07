import { useEffect, useState } from "react";

const QuestionCard = (props:any) => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        questions();
    }, [])

    const questions = async() => {
        try {
            const response = await fetch(`https://co1.qualtrics.com/API/v3/survey-definitions/${props.id}/questions`, {
            "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            })

            setQuestion(await response.json().then(json => json.result.elements));

        } catch(error) {
            console.error();
        }
    }

    return (
        <>

            <h1>{props.survey}</h1>
            {
                question.map((data:any) => { // :any temporary fix
                    return(
                        <div key={data.QuestionID}>
                            <h2>{data.QuestionText}</h2>
                            <p>id: {data.QuestionID}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default QuestionCard;
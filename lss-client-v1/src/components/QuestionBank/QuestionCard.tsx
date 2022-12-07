import { useEffect, useState } from "react";
import QuestionService from "../../services/QuestionService";

const QuestionCard = (props:any) => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        questions();
    }, [])

    const questions = async () => {
        QuestionService.GetQuestions(props.id).then(
            async (data) => {
                if(data.status == 200) {
                    setQuestion(await data.json().then(json => json.result.elements))
                } else {
                    switch(data.status) {
                        case 401:
                            console.log("Unauthorized to view questions");
                            break;
                        case 404:
                            console.log("Questions not found");
                            break;
                        case 500:
                            console.log("Internal server error");
                            break;
                        default:
                            console.log("There was an retrieving questions");
                            break;
                    } // switch
                } // if-else
            } // handle question service response
        ); // get questions
    } // questions

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
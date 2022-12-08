import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionService from "../../services/QuestionService";

const SurveyQuestions = (props:any) => {
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
            <h2>Questions</h2>
            <ol className="survey-q-list">
                {
                    question.map((data:any) => { // :any temporary fix
                        return(
                            <li key={data.QuestionID}>
                                <strong>{data.QuestionText}</strong>
                                <p>id: {data.QuestionID}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default SurveyQuestions;
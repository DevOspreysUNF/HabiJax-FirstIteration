import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuestionCard from '../QuestionBank/QuestionCard'

const SurveyDetail = (props:any) => {
    const [survey, setSurvey] = React.useState(null)
    const { surveyId } = useParams()

    useEffect(() => {
        console.log(surveyId)
    }, [surveyId]);

    return(
        <>
            <h1>Survey Detail Page</h1>
            <p>under construction</p>
            <QuestionCard id={surveyId} />
        </>
    )
}

export default SurveyDetail;
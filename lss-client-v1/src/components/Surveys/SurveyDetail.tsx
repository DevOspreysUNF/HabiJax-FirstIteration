import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import SurveyQuestions from './SurveyQuestions'

const SurveyDetail = (props:any) => {
    const [survey, setSurvey] = React.useState(null)
    const { surveyId } = useParams();
    const location = useLocation();
    const state = location.state;
    console.log(state)

    useEffect(() => {
    }, [surveyId]);

    return(
        <>
            <h1>Survey Details for <strong>{state}</strong></h1>
            <SurveyQuestions id={surveyId} />
        </>
    )
}

export default SurveyDetail;
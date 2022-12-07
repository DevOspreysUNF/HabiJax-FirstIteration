export default {
    GetQuestions: (surveyId:string) => {
        return fetch(`https://co1.qualtrics.com/API/v3/survey-definitions/${surveyId}/questions`, {
            "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            }
        );
    }
}
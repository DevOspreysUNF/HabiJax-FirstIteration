export default {
    GetSurveys: () => {
        return fetch("https://yul1.qualtrics.com/API/v3/surveys", {
            "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "aMCZkoJ23O0fcIAcLmkWITxXdxJqItLxeDIVRKKP"
                }
            })

            // if(!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
    }
}
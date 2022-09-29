import React, { Fragment, useState } from "react";

const InputQuestion = () => {
    const [qText, setQText] = useState("");

    return (
        <Fragment>
            <h1>New Question</h1>
            <form>
                <select id="question-type">
                    <option value="Question type">Question type...</option>
                    <option value="Short Answer">Short Answer</option>
                    <option value="Long Answer">Long Answer</option>
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="Scale">Scale/Rating</option>
                    <option value="Yes or No">Yes or No</option>
                </select>
                <input 
                    type="text" 
                    id="question-text"
                    placeholder="Write your question here..."
                    value={qText}
                    onChange={e => setQText(e.target.value)}
                ></input>
                <button>Add to Question Bank</button>
            </form>
            
        </Fragment>
    );
}

export default InputQuestion;
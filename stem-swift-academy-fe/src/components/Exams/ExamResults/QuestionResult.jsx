import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './ExamResults.css'

const QuestionResult = ({ number, question, userAnswer }) => {
    const [explanationIsToggled, setExplanationIsToggled] = useState(false);

    return (   
        <article className="my-20 ml-36">
            <h1 className="my-6 question-title">{number}. {question.title}</h1>
            <p>{question.choices.map(answer => 
                <li key={answer.id} className={answer == question.correct_answer ? "text-green-400 text-xl" : answer == userAnswer ? "text-red-500 text-xl" : "text-black text-xl"}>{answer}</li>
            )}</p>

            <section className="flex mt-4">
                <FontAwesomeIcon icon={faCaretRight} onClick={() => setExplanationIsToggled(!explanationIsToggled)} size="2x"></FontAwesomeIcon>
                <p className="ml-5 mt-1 text-xl">Explanation</p>
            </section>
            <p className={explanationIsToggled ? "block mt-5" : "hidden"}>{question.explanation}</p>
            
        </article>
    );
}

export default QuestionResult;
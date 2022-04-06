import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './ExamResults.css'

const QuestionResult = ({ number, question, userAnswer }) => {
    const [explanationIsToggled, setExplanationIsToggled] = useState(false);
    
    const stateUser = useSelector((state) => state.user.value);
    const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
    const userId = user.id;

    const navigate = useNavigate();

    return (   
        <article className="my-20 ml-36">
            <h1 className="my-6 question-title">{number}. {question.title}</h1>
            <p>{question.choices.map((answer, i) => 
                <li key={i} className={answer == question.correct_answer ? "text-green-400 text-xl" : answer == userAnswer ? "text-red-500 text-xl" : "text-black text-xl"}>{answer}</li>
            )}</p>

            <section className="flex mt-4">
                <FontAwesomeIcon icon={explanationIsToggled ? faCaretDown : faCaretRight} onClick={() => setExplanationIsToggled(!explanationIsToggled)} size="2x"></FontAwesomeIcon>
                <p className="ml-5 mt-1 text-xl">Explanation</p>
            </section>

            <p className={explanationIsToggled ? "block mt-5" : "hidden"}>{question.explanation}</p>
            <button className="btn add-btn mt-5 px-2" onClick={() => navigate(`/notebooks/${userId}/create`, { state: { question: question.title, correctAnswer: question.correct_answer, userAnswer: userAnswer} })}>Add to notebook</button>
        </article>
    );
}

export default QuestionResult;
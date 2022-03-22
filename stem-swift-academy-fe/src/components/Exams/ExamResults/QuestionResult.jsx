import './ExamResults.css'

const QuestionResult = ({ question, userAnswer }) => {
    return (   
        <article className="my-16 ml-36">
            <h1 className="my-6 question-title">{question.title}</h1>
            <p>{question.choices.map(answer => 
                <li className={answer == question.correct_answer ? "text-green-400" : answer == userAnswer ? "text-red-500" : "text-black"}>{answer}</li>
            )}</p>
        </article>
    );
}

export default QuestionResult;
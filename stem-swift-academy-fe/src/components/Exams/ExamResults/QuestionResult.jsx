import './ExamResults.css'

const QuestionResult = ({ number, question, userAnswer }) => {
    return (   
        <article className="my-16 ml-36">
            <h1 className="my-6 question-title">{number}. {question.title}</h1>
            <p>{question.choices.map(answer => 
                <li key={answer.id} className={answer == question.correct_answer ? "text-green-400 text-xl" : answer == userAnswer ? "text-red-500 text-xl" : "text-black text-xl"}>{answer}</li>
            )}</p>
        </article>
    );
}

export default QuestionResult;
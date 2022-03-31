import { useForm } from 'react-hook-form';
import { kolbService } from '../../../services/kolbService';
import { useSelector } from 'react-redux';

import { errorNotification } from '../../notification';
import { useNavigate, useLocation } from 'react-router';

const CreateKolbs = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

    const navigate = useNavigate();

    const { state } = useLocation();
    const question = state.question;
    const correctAnswer = state.correctAnswer;
    const userAnswer = state.userAnswer;

    const stateUser = useSelector((state) => state.user.value);
    const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    
    const onSubmit = async (data) => {
        const content = { question: data.question, correctAnswer, userAnswer, what: data.what, why: data.why, how: data.how};

        kolbService.createOne(content, userId)
        .then(() => {
            navigate(`/notebooks/${userId}`);
        })
        .catch(() => {
            errorNotification('There was an error creating your kolb. Please try again later!');
        })
    }

    return (
        <>
            <h1 className="heading">Create Kolbs</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-left">
                <article className="flex flex-col items-start my-14 mx-96 text-left">
                    <label htmlFor="question">Question (Which question did you get wrong?)</label>
                    <input name="question" {...register('question')} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="text" value={question}/>
                    {errors.question && <p className="text-blue-500">{errors.question.message}</p>}
                </article>
                
                <article className="flex flex-col items-start my-14 mx-96 text-left">
                    <label htmlFor="correctAnswer">Correct Answer (Which is the correct answer to the question?)</label>
                    <input name="correctAnswer" {...register('correctAnswer')} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="text" value={correctAnswer} disabled/>
                    {errors.correctAnswer && <p className="text-blue-500">{errors.correctAnswer.message}</p>}
                </article>
 
                <article className="flex flex-col items-start my-14 mx-96 text-left">
                    <label htmlFor="userAnswer">Your Answer (Which answer did you choose?)</label>
                    <input name="userAnswer" {...register('userAnswer')} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="text" value={userAnswer} disabled/>
                    {errors.userAnswer && <p className="text-blue-500">{errors.userAnswer.message}</p>}
                </article>
 
                <article className="flex flex-col items-start my-14 mx-96 text-left">
                    <label htmlFor="what">What? (What was the question and what mistake did you make?)</label>
                    <input name="what" {...register('what', { required: { value: true, message: 'Explanation is required!' } })} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="text" />
                    {errors.what && <p className="text-blue-500">{errors.what.message}</p>}
                </article>

                <article className="flex flex-col items-start my-14 mx-96 text-left">
                    <label htmlFor="why">Why? (Why did you think of the wrong answer? Can you find a knowledge gap or a concept that you need to improve your knowledge of?)</label>
                    <input name="why" {...register('why', { required: { value: true, message: 'Explanation is required!' } })} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="text" />
                    {errors.why && <p className="text-blue-500">{errors.why.message}</p>}
                </article>

                <article className="flex flex-col items-start my-14 mx-96 text-left">
                    <label htmlFor="how">How? (How can you prevent doing the same mistake again? How can you change your solution to avoid losing points on the same type of question?)</label>
                    <input name="how" {...register('how', { required: { value: true, message: 'Explanation is required!' } })} className="h-14 pl-4 text-xl bg-transparent border-blue-500 border-b-4 placeholder-blue-500 focus:outline-none" type="text" />
                    {errors.how && <p className="text-blue-500">{errors.how.message}</p>}
                </article>

                <article className="flex flex-col items-center">
                    <input type="submit" value="Add to Notebook" className="btn my-10" />
                </article>
            </form>
        </>
    )
}

export default CreateKolbs;
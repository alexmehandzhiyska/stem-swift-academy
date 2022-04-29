import './CreateExam.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { examService } from '../../../services/examService';
import { errorNotification, successNotification } from '../../notification';
import LottieAnimation from '../../LottieAnimation';

const CreateExam = () => {
  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [examSubject, setExamSubject] = useState('english');
  const [charsLeft, setCharsLeft] = useState(5000);
  const [isLoading, setIsLoading] = useState(true);

  const questionsArr = Array(10).fill(1);
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  let { examType, subject, examId } = useParams();

  const mode = examId ? 'edit' : 'create'
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'edit') {
      examService.getOne(examSubject, examId)
        .then(response => {
          setExam(response);
          setCharsLeft(5000 - response.text.length);
        })
        .catch(() => errorNotification('There was an error loading the exam data. Please try again later!'));

      examService.getQuestions(examSubject, examId, false)
        .then(response => {
          const questions = response;

          questions.forEach(q => {
            q.choices = q.choices.filter(ch => ch !== q.correct_answer);
          });

          setQuestions(questions);
          setIsLoading(false);
        })
        .catch(() => errorNotification('There was an error loading the exam data. Please try again later!'));

      setExamSubject(subject);
    } else {
      setIsLoading(false);
    }
  }, [examSubject, examId, mode, subject]);


  const submitExamHandler = (data) => {
    if (mode === 'edit') {
      data.type = examType;
      examService.updateOne(examSubject, examId, data)
        .then(() => {
          successNotification('Exam edited successfully!');
          navigate(`/exams/${examType}/${examId}`);
        })
        .catch(() => {
          errorNotification('There was an error editing your exam. Please try again later.');
        });
    } else {
      data.type = examType;

      examService.createOne(data)
        .then(() => {
          successNotification('Exam created successfully!');
          navigate(`/exams/${examType}`, { state: { subject: examSubject } });
        })
        .catch(() => {
          errorNotification('There was an error creating your exam. Please try again later.');
        });
    }
  }

  const charactersChange = (e) => {
    const chars = e.target.value.length;

    if (charsLeft <= 2) {
      e.target.value = e.target.value.slice(0, 4999);
    }

    setCharsLeft(5000 - chars);
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="create-test text-white">
          <h1 className="heading capitalize">{mode} Test</h1>

          <form className="subject-select flex flex-col items-center" onSubmit={handleSubmit(submitExamHandler)}>
            <select className="capitalize" {...register('subject')} defaultValue={mode === 'edit' ? exam.subject : 'english'}  onChange={e => setExamSubject(e.target.value)} name="subject">
              <option value="english">english</option>
              <option value="math">math</option>
              <option value="medicine">medicine</option>
            </select>

            <fieldset className="non-english-inputs flex flex-col items-center">
              <input name="subject" {...register('subject')} placeholder="Exam subject (English, Math)" type="text" defaultValue={mode === 'edit' ? exam.section : ''} />
              <input name="title" {...register('title')} className="exam-input" placeholder="Title" type="text" defaultValue={mode === 'edit' ? exam.title : ''} />
              <input name="section" {...register('section')} className="exam-input" placeholder="Section" type="text" defaultValue={mode === 'edit' ? exam.section : ''} />
              <input name="instructions" {...register('instructions', { required: { value: true, message: 'Field is required!' } })} className="exam-input" placeholder="Instructions" type="text" defaultValue={mode === 'edit' ? exam.instructions : ''} />
              {errors.instructions && <p className="text-blue-500">{errors.instructions.message}</p>}
              <input name="duration" {...register('duration', { required: { value: true, message: 'Field is required!' } })} className="exam-input" placeholder="Test duration (in minutes)" type="number" defaultValue={mode === 'edit' ? exam.duration : ''} />
              {errors.duration && <p className="text-blue-500">{errors.duration.message}</p>}
              <input name="difficulty" {...register('difficulty', { required: { value: true, message: 'Field is required!' } })} className="exam-input" placeholder="Test difficulty (Low, Medium or High)" type="text" defaultValue={mode === 'edit' ? exam.difficulty : ''} />
              {errors.difficulty && <p className="text-blue-500">{errors.difficulty.message}</p>}
              <input name="pdfLink" {...register('pdfLink')} className="exam-input" placeholder="PDF link" type="text" defaultValue={mode === 'edit' ? exam.link : ''} />
            </fieldset>

            <article className="english-inputs flex flex-col items-center">
              <textarea name="text" {...register('text', { maxLength: { value: 5000, message: 'Text cannot be longer than 5000 characters!' } })} onChange={charactersChange} className={examSubject === 'english' ? 'exam-input' : 'hidden'} placeholder="Text" type="text" defaultValue={mode === 'edit' ? exam.text : ''}></textarea>

              <h3 className={examSubject === 'english' ? 'chars-left' : 'hidden'}>Characters left: {charsLeft}</h3>

            </article>

            {questionsArr.map((q, i) =>
              <article key={i} className="question">
                <h2 className="question-header heading">Question {i + 1}</h2>

                <input {...register(`questions.question-${i + 1}.title`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Question" name={`questions.question-${i + 1}.title`} defaultValue={mode === 'edit' ? questions[i].title : ''} />
                {errors[`questions.question-${i + 1}.title`] && <p className="text-blue-500">{errors[`questions.question-${i + 1}.title`].message}</p>}
                <input {...register(`questions.question-${i + 1}.imageUrl`)} className="exam-input" type="text" placeholder="Image link (if needed to answer the question)" name={`questions.question-${i + 1}.imageUrl`} defaultValue={mode === 'edit' ? questions[i].imageUrl : ''} />
                <input {...register(`questions.question-${i + 1}.correctAnswer`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Correct Answer" name={`questions.question-${i + 1}.correctAnswer`} defaultValue={mode === 'edit' ? questions[i].correct_answer : ''} />
                {errors[`questions.question-${i + 1}.correctAnswer`] && <p className="text-blue-500">{errors[`questions.question-${i + 1}.correctAnswer`].message}</p>}
                <input {...register(`questions.question-${i + 1}.wrongAnswer1`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="First wrong answer" name={`questions.question-${i + 1}.wrongAnswer1`} defaultValue={mode === 'edit' ? questions[i].choices[0] : ''} />
                {errors[`questions.question-${i + 1}.wrongAnswer1`] && <p className="text-blue-500">{errors[`questions.question-${i + 1}.wrongAnswer1`].message}</p>}
                <input {...register(`questions.question-${i + 1}.wrongAnswer2`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Second wrong answer" name={`questions.question-${i + 1}.wrongAnswer2`} defaultValue={mode === 'edit' ? questions[i].choices[1] : ''} />
                {errors[`questions.question-${i + 1}.wrongAnswer2`] && <p className="text-blue-500">{errors[`questions.question-${i + 1}.wrongAnswer2`].message}</p>}
                <input {...register(`questions.question-${i + 1}.wrongAnswer3`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Third wrong answer" name={`questions.question-${i + 1}.wrongAnswer3`} defaultValue={mode === 'edit' ? questions[i].choices[2] : ''} />
                {errors[`questions.question-${i + 1}.wrongAnswer3`] && <p className="text-blue-500">{errors[`questions.question-${i + 1}.wrongAnswer3`].message}</p>}

              </article>
            )}

            <article className="btn-wrapper">
              <input type="submit" className="btn capitalize" value={`${mode} Test`} />
            </article>
          </form>
        </section>
      }
    </>
  );
}

export default CreateExam;
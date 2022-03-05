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
  const [charsLeft, setCharsLeft] = useState(2500);
  const [isLoading, setIsLoading] = useState(true);

  const questionsArr = Array(10).fill(1);
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const { subject, examId } = useParams();
  const mode = examId ? 'edit' : 'create'
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'edit') {
      examService.getOne(subject, examId)
        .then(response => setExam(response.data.exam))
        .catch(error => errorNotification('There was an error loading the exam data. Please try again later!'));

      examService.getQuestions(subject, examId, false)
        .then(response => {
          setQuestions(response.data.questions)
          setIsLoading(false);
        })
        .catch(error => errorNotification('There was an error loading the exam data. Please try again later!'));
    } else {
      setIsLoading(false);
    }
  }, [subject, examId, mode]);


  const submitExamHandler = (data) => {
    if (mode === 'edit') {
      examService.updateOne(subject, examId, data)
        .then(response => {
          successNotification('Exam edited successfully!');
          navigate(`/exams/${subject}/${examId}`);
        })
        .catch(error => {
          errorNotification('There was an error editing your exam. Please try again later.');
        });
    } else {
      examService.createOne(data)
        .then(response => {
          successNotification('Exam created successfully!');
          navigate(`/exams/${data.subject}`)
        })
        .catch(error => {
          errorNotification('There was an error creating your exam. Please try again later.');
        });
    }
  }

  const charactersChange = (e) => {
    const chars = e.target.value.length;

    if (charsLeft <= 1) {
      e.target.disabled = true;
    }
    setCharsLeft(2500 - chars);
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="create-test text-white">
          <h1 className="heading capitalize">{mode} Test</h1>

          <form className="subject-select flex flex-col items-center" onSubmit={handleSubmit(submitExamHandler)}>
            <select className="capitalize" defaultValue={mode === 'edit' ? exam.subject : 'english'} {...register('subject')} name="subject">
              <option value="english">english</option>
              <option value="math">math</option>
            </select>

            <fieldset className="non-english-inputs flex flex-col items-center">
              <input name="section" {...register('section', { required: { value: true, message: 'Field is required!' } })} className="exam-input" placeholder="Section" type="text" defaultValue={mode === 'edit' ? exam.section : ''} />
              {errors.section && <p>{errors.section.message}</p>}
              <input name="instructions" {...register('instructions', { required: { value: true, message: 'Field is required!' } })} className="exam-input" placeholder="Instructions" type="text" defaultValue={mode === 'edit' ? exam.instructions : ''} />
              {errors.instructions && <p>{errors.instructions.message}</p>}
              <input name="time" {...register('time', { required: { value: true, message: 'Field is required!' } })} className="exam-input" placeholder="Test time (in minutes)" type="number" defaultValue={mode === 'edit' ? exam.time : ''} />
              {errors.time && <p>{errors.time.message}</p>}
              <input name="pdfLink" {...register('pdfLink')} className="exam-input" placeholder="PDF link" type="text" defaultValue={mode === 'edit' ? exam.link : ''} />
            </fieldset>

            <article className="english-inputs flex flex-col items-center">
              <textarea name="text" {...register('text', { maxLength: { value: 2500, message: 'Text cannot be longer than 2500 characters!' } })} onChange={charactersChange} className={`exam-input ${subject === 'english' ? 'block' : 'hidden'}`} placeholder="Text" type="text" defaultValue={mode === 'edit' ? exam.text : ''}></textarea>

              {/* <h3 className="chars-left">Characters left: {charsLeft}</h3> */}

            </article>

            {questionsArr.map((q, i) =>
              <article key={i} className="question">
                <h2 className="question-header heading">Question {i + 1}</h2>

                <input {...register(`questions.question-${i + 1}.title`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Question" name={`questions.question-${i + 1}.title`} defaultValue={mode === 'edit' ? questions[i].title : ''} />
                {errors[`questions.question-${i + 1}.title`] && <p>{errors[`questions.question-${i + 1}.title`].message}</p>}
                <input {...register(`questions.question-${i + 1}.correctAnswer`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Correct Answer" name={`questions.question-${i + 1}.correctAnswer`} defaultValue={mode === 'edit' ? questions[i].correct_answer : ''} />
                {errors[`questions.question-${i + 1}.correctAnswer`] && <p>{errors[`questions.question-${i + 1}.correctAnswer`].message}</p>}
                <input {...register(`questions.question-${i + 1}.wrongAnswer1`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="First wrong answer" name={`questions.question-${i + 1}.wrongAnswer1`} defaultValue={mode === 'edit' ? questions[i].choices[1] : ''} />
                {errors[`questions.question-${i + 1}.wrongAnswer1`] && <p>{errors[`questions.question-${i + 1}.wrongAnswer1`].message}</p>}
                <input {...register(`questions.question-${i + 1}.wrongAnswer2`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Second wrong answer" name={`questions.question-${i + 1}.wrongAnswer2`} defaultValue={mode === 'edit' ? questions[i].choices[2] : ''} />
                {errors[`questions.question-${i + 1}.wrongAnswer2`] && <p>{errors[`questions.question-${i + 1}.wrongAnswer2`].message}</p>}
                <input {...register(`questions.question-${i + 1}.wrongAnswer3`, { required: { value: true, message: 'Field is required!' } })} className="exam-input" type="text" placeholder="Third wrong answer" name={`questions.question-${i + 1}.wrongAnswer3`} defaultValue={mode === 'edit' ? questions[i].choices[3] : ''} />
                {errors[`questions.question-${i + 1}.wrongAnswer3`] && <p>{errors[`questions.question-${i + 1}.wrongAnswer3`].message}</p>}

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
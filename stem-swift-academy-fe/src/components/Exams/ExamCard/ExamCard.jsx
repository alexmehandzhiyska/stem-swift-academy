import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { examService } from '../../../services/examService';
import { deleteConfirmNotification, errorNotification, successNotification } from '../../notification';

import './ExamCard.css';

const ExamCard = ({ exam, subject, allExams, setNewExams }) => {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const deleteExamHandler = async () => {
    const confirmed = await deleteConfirmNotification('Are you sure you want to delete this exam?');

    if (confirmed) {
      examService.deleteOne(exam.type, exam.id)
        .then(response => {
          if (response.status === 'success') {
            successNotification('Successfully deleted the exam!');
            const examsLeft = allExams.filter(e => e.id !== exam.id);
            setNewExams(examsLeft);
          }
        });
    }
  }

  const pdfHandler = () => {
    if (exam.link) {
      window.location.href = exam.link;
    } else {
      errorNotification('No pdf associated with this exam!');
    }
  }

  return (
    <section className="test">
      <p className="test-name">{exam.title}</p>
      <p className="test-time">{exam.duration} min</p>

      {user?.role !== 'student' &&
        <article className='admin-tools'>
          <Link to={`/exams/${exam.type}/${exam.id}/edit`}><FontAwesomeIcon icon={faEdit} className="mx-3 text-3xl text-blue-500 transition-colors duration-500 hover:text-green-500"></FontAwesomeIcon></Link>
          <FontAwesomeIcon icon={faTrash} onClick={deleteExamHandler} className="mx-3 text-3xl text-blue-500 transition-colors duration-500 hover:text-red-500"></FontAwesomeIcon>
        </article>
      }

      <article className="btns-wrapper">
        <Link to={`/exams/${exam.type}/${exam.id}`} state={{ subject: subject }}><button className="start-btn">Start</button></Link>
        <p onClick={pdfHandler}><button className="download-btn">View as PDF</button></p>
      </article>
    </section>
  );
};

export default ExamCard;

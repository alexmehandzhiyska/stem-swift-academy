import { useEffect, useState } from 'react';
import { userService } from '../../services/userService';
import { useSelector } from 'react-redux';

import ExamStatistics from './ExamStatistics';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

const StudentProfile = () => {
  const stateUser = useSelector((state) => state.user.value);
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));

  const [exams, setExams] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    userService.getUserExams(user.id)
      .then(response => {
        setSubjects(response.data.totalQuestions.map(s => s.subject));
        setExams(response.data.exams);
        setTotalQuestions(response.data.totalQuestions);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading your data. Please try again later!');
      });
  }, [user.id]);


  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading && exams.length > 0 &&
        <section>
          <h1 className="heading">{user.name}'s profile</h1>

          <article className="flex justify-center items-center">
            {subjects.map(s =>
              <ExamStatistics
                key={s}
                subject={s}
                exams={exams.filter(e => e.subject === s)}
                totalQuestions={totalQuestions.find(g => g.subject === s).count}
              />
            )}
          </article>
        </section>
      }

      {!isLoading && exams.length === 0 &&
        <section>
          <h1 className="heading">{user.name}'s profile</h1>
          <h1 className="heading mt-40">No exams yet!</h1>
        </section>
      }
    </>
  );
}

export default StudentProfile;
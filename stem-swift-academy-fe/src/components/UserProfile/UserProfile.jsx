import { useEffect, useState } from 'react';

import { userService } from '../../services/userService';

import ExamStatistics from './ExamStatistics';
import UserData from './UserData/UserData';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [dataIsModified, setDataIsModified] = useState(false);
  const [userData, setUserData] = useState(null);
  const [exams, setExams] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userService.getOne(user.id)
      .then((response) => {
        setUserData(response);
      })
      .catch(() => errorNotification('There was an error loading your profile data. Please try again later!'));
  }, [dataIsModified]);

  useEffect(() => {
    setIsLoading(true);

    userService.getUserExams(user.id)
      .then(response => {
        const examTypes = response.exams.map(exam => exam.type);
        setExamTypes([...new Set(examTypes)]);
        setExams(response.exams);
        setQuestions(response.questions);
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

          <article className="flex justify-center">
            <UserData userData={userData} dataIsModified={dataIsModified} setDataIsModified={setDataIsModified} />
          </article>

          <article className="flex justify-center items-start mb-20">
            {examTypes.map((et, i) =>
              <ExamStatistics
                key={i}
                type={et}
                exams={exams.filter(e => e.type === et)}
                totalQuestions={questions.filter(question => question.exam_type === et).length}
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

export default UserProfile;
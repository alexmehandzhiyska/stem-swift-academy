import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import { userService } from '../../services/userService';

import ExamStatistics from './ExamStatistics';
import UserData from './UserData/UserData';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

const UserProfile = () => {
  const stateUser = useSelector((state) => state.user.value);
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));

  const { state } = useLocation();
  const modified = state ? state.modified : false;

  const updateUserData = () => {
    userService.getOne(user.id)
      .then((response) => setUserData(response))
      .catch(() => errorNotification('There was an error loading your profile data. Please try again later!'));
  }

  if (modified) {
    updateUserData();
  }

  const [userData, setUserData] = useState(null);
  const [exams, setExams] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userService.getOne(user.id)
      .then((response) => setUserData(response))
      .catch(() => errorNotification('There was an error loading your profile data. Please try again later!'));
  }, []);

  useEffect(() => {
    setIsLoading(true);

    userService.getUserExams(user.id)
      .then(response => {
        const subjects = response.exams.map(exam => exam.subject);
        setSubjects([...new Set(subjects)]);
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
            <UserData userData={userData} />
          </article>

          <article className="flex justify-center items-center mb-20">
            {subjects.map((s, i) =>
              <ExamStatistics
                key={i}
                subject={s}
                exams={exams.filter(e => e.subject === s)}
                totalQuestions={questions.filter(question => question.subject === s).length}
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
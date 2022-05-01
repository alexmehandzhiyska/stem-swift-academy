import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
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

  const [userData, setUserData] = useState(null);
  const [exams, setExams] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
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
        const examTypes = response.exams.map(exam => exam.type);
        setExamTypes([...new Set(examTypes)]);
        console.log(examTypes);
        setExams(response.exams);
        console.log(response.questions);
        setQuestions(response.questions);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading your data. Please try again later!');
      });
  }, [user.id]);

  const updateUserData = () => {
    userService.getOne(user.id)
      .then((response) => setUserData(response))
      .catch(() => errorNotification('There was an error loading your profile data. Please try again later!'));
  }

  if (modified) {
    updateUserData();
  }

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
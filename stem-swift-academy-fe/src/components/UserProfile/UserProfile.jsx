import { useEffect, useState } from 'react';

import { userService } from '../../services/userService';
import UserData from './UserData/UserData';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

import ExamStatistics from './ExamStatistics';

import Aos from 'aos';
import 'aos/dist/aos.css';

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [dataIsModified, setDataIsModified] = useState(false);
  const [userData, setUserData] = useState(null);
  const [exams, setExams] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => Aos.init({ duration: 500 }), []);

  useEffect(() => {
    userService.getOne(user.id)
      .then((response) => {
        setUserData(response);
      })
      .catch(() => errorNotification('There was an error loading your profile data. Please try again later!'));
  }, [dataIsModified, user.id]);

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
      {!isLoading && userData &&
        <section>
          <article data-aos="zoom-in" className="flex flex-col items-center justify-center">
            <h1 data-aos="zoom-in" className="heading">{user.name}'s profile</h1>
            <UserData userData={userData} dataIsModified={dataIsModified} setDataIsModified={setDataIsModified} />
          </article>

          {exams.length > 0 &&  
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
          }
        </section>
      }
    </>
  );
}

export default UserProfile;
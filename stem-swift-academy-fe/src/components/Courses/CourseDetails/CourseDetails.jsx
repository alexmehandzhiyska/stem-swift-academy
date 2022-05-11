import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { courseService } from '../../../services/courseService';
import LottieAnimation from '../../LottieAnimation';
import { errorNotification, successNotification } from '../../notification';
import Plan from '../Plan/Plan';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './CourseDetails.css';

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));

  const formatDate = (date) => date.slice(0, 10).split('-').reverse().join('.');

  const { courseId } = useParams();

  useEffect(() => Aos.init({ duration: 500 }), []);

  useEffect(() => {
    courseService.getOne(courseId)
      .then(result => {
        result.course.start_date = formatDate(result.course.start_date);
        result.course.end_date = formatDate(result.course.end_date);
        setCourse(result.course);
      })
      .catch(() => {
        errorNotification('There was an error loading the course details. Please try again later!');
      })
  }, [courseId]);

  useEffect(() => {
    courseService.getCourses(user.id, true)
      .then(response => {
        const courses = response;
        const isRegistered = courses.includes(Number(courseId));
        setIsRegistered(isRegistered);
        setIsLoading(false);
      });
  }, [user.id, courseId]);

  const registerForCourse = () => {
    courseService.registerUser(courseId, user.id)
      .then(() => {
        setIsRegistered(true);
        successNotification('Successfully registered!');
      })
      .catch(() => {
        errorNotification('There as a problem registering for the course. Please try again later!');
      });
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="course-details">
          <article data-aos="fade-in" className="course-info my-32">
            <h1 className="heading font-semibold">{course.duration} {course.duration === 1 ? 'Month' : 'Months'} Course</h1>
            <table className="course-info-table mx-auto border-4 border-blue-500">
              <tbody>
                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Lecturer</td>
                  <td className="course-category-value course-lecturer py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.lecturer}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Duration</td>
                  <td className="course-category-value course-duration py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.duration} Months</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Start Date</td>
                  <td className="course-category-value course-start-date py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.start_date}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">End Date</td>
                  <td className="course-category-value course-end-date py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.end_date}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Textbook</td>
                  <td className="course-category-value course-textbook py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.textbook}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Lectures Link (Zoom)</td>
                  <td className="course-category-value course-lectures-link py-2 px-14 text-left text-xl text-blue-500 font-bold underline"><a href={course.lectures_link} target="_blank" rel="noreferrer">{course.lectures_link}</a></td>
                </tr>
              </tbody>
            </table>
          </article>

          <article data-aos="fade-in" className="study-plan-wrapper">
            <h1 className="stuyd-plan heading font-bold">Study Plan</h1>
            <Plan courseId={course.id} topics={course.topics} weeklyLectures={course.weekly_lectures}></Plan>
          </article>


          <article className="my-10 flex justify-center">
            <button onClick={registerForCourse} className={`register-btn mx-2 my-5 px-20 py-2 bg-blue-500 text-white border-2 border-blue-500 rounded-full text-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 transition ${isRegistered ? 'registered' : ''}`} disabled={isRegistered}>{isRegistered ? 'Registered' : 'Register'}</button>
            <Link to="/courses"><button className="mx-2 my-5 py-2 px-20 bg-white text-blue-500 border-blue-500 border-2 border-solid rounded-full text-lg hover:bg-blue-500 hover:text-white transition">Back</button></Link>
          </article>
        </section>
      }
    </>
  );
}

export default CourseDetails;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { courseService } from '../../../services/courseService';


import Plan from '../Plan/Plan';
import LottieAnimation from '../../LottieAnimation';
import './CourseDetails.css';
import { errorNotification, successNotification } from '../../notification';

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const stateUser = useSelector((state) => state.user.value)
  const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));

  const formatDate = (date) => date.slice(0, 10).split('-').reverse().join('.');

  const { courseId } = useParams();

  useEffect(() => {
    courseService.getOne(courseId)
      .then(result => {
        result.data.course.start_date = formatDate(result.data.course.start_date);
        result.data.course.end_date = formatDate(result.data.course.end_date);
        setCourse(result.data.course);
      })
      .catch(error => {
        errorNotification('There was an error loading the course details. Please try again later!');
      })
  }, [courseId]);

  useEffect(() => {
    courseService.getCourses(user.id, true)
      .then(response => {
        const courses = response.data.courses;
        setIsRegistered(courses.includes(Number(courseId)));
        setIsLoading(false);
      });
  }, [user.id, courseId]);

  const onRegister = async () => {
    try {
      await courseService.registerUser(courseId, user.id);

      successNotification('Successfully registered!');
      setIsRegistered(true);
    } catch (error) {
      errorNotification('There as a problem registering for the course. Please try again later!');
    }
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="course-details">
          <section className="course-info my-32">
            <h1 className="heading font-semibold">{course.duration} {course.duration === 1 ? 'Month' : 'Months'} Course</h1>
            <table className="course-info-table mx-auto border-4 border-blue-500">
              <tbody>
                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Lecturer</td>
                  <td className="course-category-value py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.lecturer}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Duration</td>
                  <td className="course-category-value py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.duration} Months</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Start Date</td>
                  <td className="course-category-value py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.start_date}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">End Date</td>
                  <td className="course-category-value py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.end_date}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Textbook</td>
                  <td className="course-category-value py-2 px-14 text-left text-xl text-blue-500 font-bold">{course.textbook}</td>
                </tr>

                <tr>
                  <td className="course-category-title py-2 px-14 text-left text-xl bg-blue-500 text-white">Lectures Link (Zoom)</td>
                  <td className="course-category-value py-2 px-14 text-left text-xl text-blue-500 font-bold underline"><a href={course.lectures_link} target="_blank" rel="noreferrer">{course.lectures_link}</a></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="study-plan-wrapper">
            <h1 className="heading font-bold">Study Plan</h1>

            <Plan courseId={course.id} lectures={course.lectures} weeks={course.duration * 4}></Plan>
          </section>


          <section className="my-10 flex justify-center">
            <button onClick={onRegister} className={`mx-2 my-5 px-20 py-2 bg-blue-500 text-white border-2 border-blue-500 rounded-full text-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 transition ${isRegistered ? 'registered' : ''}`} disabled={isRegistered}>{isRegistered ? 'Registered' : 'Register'}</button>
            <Link to="/courses"><button className="mx-2 my-5 py-2 px-20 bg-white text-blue-500 border-blue-500 border-2 border-solid rounded-full text-lg hover:bg-blue-500 hover:text-white transition">Back</button></Link>
          </section>
        </section>
      }
    </>
  );
}

export default CourseDetails;
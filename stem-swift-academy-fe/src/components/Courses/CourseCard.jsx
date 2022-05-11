import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons';

import { formatDate } from '../../utils';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CourseCard = ({ course }) => {
  useEffect(() => Aos.init({ duration: 1000 }), [])
  
  const startDate = formatDate(course.start_date);
  const endDate = formatDate(course.end_date);

  return (
    <article data-aos="flip-left" className="course flex flex-col items-center px-10 py-16 bg-blue-500 rounded-3xl">
      <h1 className="mb-2 text-center text-3xl">{course.duration} Months SAT Course</h1>

      <section className="flex items-center self-start text-xl pt-5">
        <FontAwesomeIcon icon={faCalendarCheck} className="mr-3"></FontAwesomeIcon>
        <p className="dates-text"> {startDate} - {endDate} </p>
      </section>

      <section className="flex items-center self-start text-xl pt-5 pb-5">
        <FontAwesomeIcon icon={faClock} className="mr-3"></FontAwesomeIcon>
        <p className="time-text">{course.weekly_lectures} lectures X week</p>
      </section>

      <Link to={`/courses/${course.id}`}><button className="mt-4 text-center btn secondary-btn">Full Information</button></Link>
    </article>
  );
}

export default CourseCard;
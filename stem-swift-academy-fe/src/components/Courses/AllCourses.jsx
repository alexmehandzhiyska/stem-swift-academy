import React, { useEffect, useState } from 'react';

import CourseCard from './CourseCard';
import LottieAnimation from '../LottieAnimation';
import { courseService } from '../../services/courseService';
import { errorNotification } from '../notification';

import Aos from 'aos';
import 'aos/dist/aos.css';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => Aos.init({ duration: 1000 }), []);

  useEffect(() => {
    setIsLoading(true);

    courseService.getAll()
      .then(courses => {
        setCourses(courses);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading the courses. Please try again later!');
      });
  }, []);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section>
          <h1 data-aos="zoom-in" className="heading courses-heading">Choose a Course</h1>

          <section className="mt-28 flex justify-evenly text-white ">
            {courses.length === 0 ? <h1 data-aos="fade-in" className="heading">There are no courses for you at the moment. Please check again later!</h1> : courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
          </section>
        </section>
      }
    </>
  );
}

export default AllCourses;
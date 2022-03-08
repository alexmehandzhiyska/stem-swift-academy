import React, { useEffect, useState } from 'react';
import { courseService } from '../../services/courseService';

import CourseCard from './CourseCard';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    courseService.getAll()
      .then(courses => {
        setCourses(courses);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        errorNotification(err);
      });
  }, []);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section>
          <h1 className="heading courses-heading">Choose a Course</h1>

          <section className="mt-28 flex justify-evenly text-white ">
            {courses.length === 0 ? <h1 className="heading">No courses yet!</h1> : courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
          </section>
        </section>
      }
    </>
  );
}

export default AllCourses;
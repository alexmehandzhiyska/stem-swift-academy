import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { errorNotification } from '../../../notification';
import { lectureService } from '../../../../services/lectureService';
import { formatDate } from '../../../../utils';
import LottieAnimation from '../../../LottieAnimation';

import './Lecture.css';

const Lecture = () => {
  const { courseId, lectureId } = useParams();

  const [lecture, setLecture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    lectureService.getOne(courseId, lectureId)
      .then(response => {
        setLecture(response.data.lecture);
        setIsLoading(false);
      })
      .catch(error => {
        errorNotification('There was an error loading the lecture. Please try again later!');
      })
  }, [courseId, lectureId]);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading && lecture &&
        <section class="flex flex-col items-center">
          <h1 className="heading">{lecture.title} - {formatDate(lecture.date)}</h1>
          <iframe className="lecture-video" src="https://www.youtube.com/embed/I5z7oCalPnQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
      }
    </>
  );
}

export default Lecture;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { errorNotification } from '../../../notification';
import { lectureService } from '../../../../services/lectureService';
import { formatDate } from '../../../../utils';
import LottieAnimation from '../../../LottieAnimation';

import './Topic.css';

const Topic = () => {
  const { courseId, topicId } = useParams();

  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    lectureService.getOne(courseId, topicId)
      .then(topic => {
        setTopic(topic);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading the topic. Please try again later!');
      })
  }, [courseId, topicId]);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading && topic &&
        <section class="flex flex-col items-center">
          <h1 className="heading">{topic.title} - {formatDate(topic.date)}</h1>
          <iframe className="topic-video" src="https://www.youtube.com/embed/I5z7oCalPnQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
      }
    </>
  );
}

export default Topic;
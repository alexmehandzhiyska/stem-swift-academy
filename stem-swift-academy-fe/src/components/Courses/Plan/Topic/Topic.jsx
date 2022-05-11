import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { errorNotification } from '../../../notification';
import { lectureService } from '../../../../services/lectureService';
import { formatDate } from '../../../../utils';
import LottieAnimation from '../../../LottieAnimation';

import './Topic.css';

const Topic = () => {
  const { courseId, topicId } = useParams();

  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useLocation();
  const recordingLink = state.recording_link;

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
        <section className="flex flex-col items-center">
          <h1 className="heading">{topic.title} - {formatDate(topic.start_time)}</h1>
          <iframe className="topic-video" src={recordingLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
      }
    </>
  );
}

export default Topic;
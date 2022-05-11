import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';

import { lectureService } from '../../../../services/lectureService';
import { formatDate } from '../../../../utils';
import LottieAnimation from '../../../LottieAnimation';
import { warningNotification } from '../../../notification';

import './Topic.css';

const Topic = () => {
  const { courseId, topicId } = useParams();

  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useLocation();
  const recordingLink = state.recording_link;

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    lectureService.getOne(courseId, topicId)
      .then(topic => {
        setTopic(topic);
        setIsLoading(false);
      })
      .catch(async (err) => {
        await warningNotification(err.message);
        navigate(`/courses/${courseId}`);
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
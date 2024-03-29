import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { formatDate, formatTime } from '../../../utils';

import { Link } from 'react-router-dom'
import { useParams } from 'react-router';

const Week = ({ courseId, week, topics }) => {
  const [infoToggled, setToggleMore] = useState(false);

  const toggleMoreInfo = () => setToggleMore(!infoToggled);

  const { courseType } = useParams();
  
  return (
    <ul className="week my-6 mx-4 px-4 bg-blue-500 text-white border-b-8 border-solid border-blue-500">

      <article className="px-10 flex justify-between items-center">
        <h3 className="mt-4 mb-2 text-lg font-semibold">Week {week}</h3>
        <FontAwesomeIcon className="mt-2" onClick={e => toggleMoreInfo(e)} icon={infoToggled ? faMinus : faPlus} size="2x" />
      </article>

      <article className={infoToggled ? "lectures-shown" : "hidden"}>
        {topics.map(lecture =>
          <p key={lecture.id} className="pl-6 font-bold text-lg">
            {!lecture.exam_id && !lecture.recording_link && <span>{lecture.subject[0].toUpperCase() + lecture.subject.slice(1)}: <span className="font-normal">{lecture.title} - {formatDate(lecture.start_time)}</span></span>}
            {lecture.exam_id && <a href={`/exams/${courseType}/${lecture.exam_id}`}>{lecture.subject[0].toUpperCase() + lecture.subject.slice(1)}: <span className="font-normal underline">{lecture.title} - {formatDate(lecture.start_time)} - {formatTime(lecture.start_time)}</span> </a>}
            
            {lecture.recording_link && <Link to={`/courses/${courseType}/${courseId}/topics/${lecture.id}`} state={ { recording_link: lecture.recording_link } }>{lecture.subject[0].toUpperCase() + lecture.subject.slice(1)}: <span className="font-normal underline">{lecture.title} - {formatDate(lecture.start_time)}</span></Link>}
          </p>
        )}
      </article>
    </ul>
  );
}

export default Week;
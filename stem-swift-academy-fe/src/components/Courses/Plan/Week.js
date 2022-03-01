import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'

const Week = ({ courseId, i, lectures }) => {
  const [infoToggled, setToggleMore] = useState(false);

  const toggleMoreInfo = () => setToggleMore(!infoToggled);

  return (
    <ul className="week my-6 mx-4 px-4 bg-blue-500 text-white">

      <article className="px-10 flex justify-between items-center">
        <h3 className="my-4 text-lg font-semibold">Week {i}</h3>
        <FontAwesomeIcon onClick={e => toggleMoreInfo(e)} icon={infoToggled ? faMinus : faPlus} size="2x" />
      </article>

      <article className={infoToggled ? "lectures-shown" : "hidden"}>
        {lectures.map(lecture =>
          <p key={lecture.id} className="pl-6 font-bold text-lg">
            <Link to={`/courses/${courseId}/lectures/${lecture.id}`}>{lecture.subject[0].toUpperCase() + lecture.subject.slice(1)}: <span className="font-normal underline">{lecture.title}</span></Link>
          </p>
        )}
      </article>
    </ul>
  );

}

export default Week;
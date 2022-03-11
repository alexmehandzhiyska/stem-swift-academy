import React, { useEffect, useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import { lectureService } from '../../services/lectureService';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

import moment from 'moment';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

const localizer = momentLocalizer(moment);
const allViews = Object.keys(Views).map(k => Views[k])

const StudentCalendar = () => {
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    lectureService.getAll()
      .then(response => {
        const allTopics = response.data.lectures;

        allTopics.forEach(t => {
          t.start = new Date(t.date.slice(0, 10));
          t.start.setUTCHours(t.time + 12, 0, 0);

          t.end = new Date(t.date.slice(0, 10));
          t.end.setUTCHours(t.time + 15, 0, 0);
        });

        setLectures(allTopics);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        errorNotification('There was an error loading your calendar. Please try again later!');
      });
  }, [])

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <Calendar
          events={lectures}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2021, 11, 12)}
          localizer={localizer}
          className='calendar'
        />
      }
    </>
  )
}

export default StudentCalendar;
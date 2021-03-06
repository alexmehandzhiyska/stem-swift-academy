import React, { useEffect, useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { lectureService } from '../../services/lectureService';
import LottieAnimation from '../LottieAnimation';
import { errorNotification } from '../notification';

import Aos from 'aos';
import 'aos/dist/aos.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);
const allViews = Object.keys(Views).map(k => Views[k])

const StudentCalendar = () => {
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => Aos.init({ duration: 500 }), []);

  useEffect(() => {
    setIsLoading(true);

    lectureService.getAll()
      .then(response => {
        const allTopics = response;

        allTopics.forEach(t => {
          t.start = new Date(t.start_time);

          const endTime = new Date(t.start_time);
          endTime.setTime(endTime.getTime() + t.duration * 60 * 60 * 1000);
          t.end = endTime;
        });

        setLectures(allTopics);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading your calendar. Please try again later!');
      });
  }, [])

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section data-aos="fade-in">
          <Calendar
            events={lectures}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date()}
            localizer={localizer}
            className='calendar'
          />
        </section>
        
      }
    </>
  )
}

export default StudentCalendar;
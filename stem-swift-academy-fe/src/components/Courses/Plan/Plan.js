import Week from './Week';

import './Plan.css';

const Plan = ({ courseId, lectures, weeks }) => {
  const groupTopics = () => {
    console.log(lectures);
    const content = [];

    for (let i = 1; i <= weeks; i++) {
      let weeklyTopics = lectures.filter(lecture => lecture.week_number === i);

      content.push(<Week key={i} courseId={courseId} i={i} lectures={weeklyTopics}></Week>);
    }

    return content;
  }


  return (
    <section className="study-plan px-56 lg:px-36">
      {groupTopics()}
    </section>
  );
}

export default Plan;
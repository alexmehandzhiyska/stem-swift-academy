import Week from './Week';

import './Plan.css';

const Plan = ({ courseId, topics, weeks }) => {
  const groupTopics = () => {
    const content = [];

    for (let i = 1; i <= weeks; i++) {
      let weeklyTopics = topics.filter(topic => topic.week_number === i);

      content.push(<Week key={i} courseId={courseId} i={i} topics={weeklyTopics}></Week>);
    }

    return content;
  }


  return (
    <section className="study-plan flex flex-wrap justify-between items-center px-56 lg:px-36">
      {groupTopics()}
    </section>
  );
}

export default Plan;
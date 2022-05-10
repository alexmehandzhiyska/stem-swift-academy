import Week from './Week';
import LottieAnimation from '../../LottieAnimation';

import './Plan.css';

const Plan = ({ courseId, weeklyLectures, topics }) => {
  
  const groupTopics = () => {
    const content = [];

    for (let i = 0, week = 1; i < topics.length; i += weeklyLectures, week++) {
      content.push(<Week key={i} courseId={courseId} week={week} topics={topics.slice(i, i + weeklyLectures)}></Week>);
    }

    return content;
  }

  return (
    <section className="study-plan flex flex-wrap justify-between items-center px-56 lg:px-36">
      {!topics && <LottieAnimation />}
      {topics && groupTopics()}
    </section>
  );
}

export default Plan;
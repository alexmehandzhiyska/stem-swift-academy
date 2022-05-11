import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => Aos.init({ duration: 1000 }), []);
  
  return (
    <section data-aos="zoom-in" className="mt-10">
      <h1 className="heading">About us</h1>

      <ul className="flex flex-col justify-center">
        <li className="my-4 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} size="4x" />
          <p className="ml-6 font-semibold">STEM Swift Academy provides you the opportunity to excel in your exams through a unique and personalized learning experience.</p>
        </li>

        <li className="my-6 ml-2 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} size="3x" />
          <p className="ml-9 font-semibold">Watch online live courses with qualified and experienced tutors in English, Math, Medicine, and other subjects.</p>
        </li>


        <li className="my-8 ml-5 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} size="2x" />
          <p className="ml-11 font-semibold">Take advantage of professionally prepared practice exams to refine your skills in the chosen area.</p>
        </li>


        <li className="my-8 ml-8 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} />
          <p className="ml-12 pl-1 font-semibold">Study using some of the most efficient study techniques, such as Kolb's experiential cycle, mindmapping, inquiry-based learning, priming, etc.</p>
        </li>

      </ul>
    </section>
  );
}

export default About;
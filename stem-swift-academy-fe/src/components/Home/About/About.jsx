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
          <p className="ml-6 font-semibold">STEM Swift Academy provides you the opportunity to excel in your final year exams using a professionally
            prepared study plan, depending on the revision period you have.</p>
        </li>

        <li className="my-4 ml-2 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} size="3x" />
          <p className="ml-9 font-semibold">Choose between study plans for 1, 3, and 4 months which cover all the content of the SAT
            Math and Reading and Writing sections and have different intensity</p>
        </li>


        <li className="my-4 ml-5 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} size="2x" />
          <p className="ml-11 font-semibold">Take advantage of the flashcard decks for English vocabulary and Math terms, which are
            prepared by certified mentors in the area of Mathematics and English language.</p>
        </li>


        <li className="my-4 ml-8 px-32 flex items-center text-blue-500 text-xl font-semibold">
          <FontAwesomeIcon icon={faStar} />
          <p className="ml-12 pl-1 font-semibold">Go through 20 practice tests, prepared according to the official practice exams of
            College board</p>
        </li>

      </ul>
    </section>
  );
}

export default About;
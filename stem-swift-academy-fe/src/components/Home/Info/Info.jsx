import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './Info.css';

const Info = () => {
  useEffect(() => Aos.init({ duration: 1000 }), []);

  return (
    <section className="mt-28 cards flex justify-evenly text-white">
      <article data-aos="flip-left" className="card flex flex-col my-40 px-8 py-8 w-1/3 bg-blue-500">
        <h1 className="mb-8 font-semibold text-2xl text-center">SAT Preparation</h1>
        <p className="mb-4 text-lg">Full practice tests, covering the reading, writing, nocalc, and calc sections.</p>
        <Link to="/exams/sat/subject" className="text-5xl text-right"><FontAwesomeIcon icon={faArrowRight} /></Link>
      </article>

      <article data-aos="flip-left" className="card flex flex-col my-40 px-8 py-8 w-1/3 bg-blue-500">
        <h1 className="mb-8 font-semibold text-2xl text-center">USMLE Preparation</h1>
        <p className="mb-4 text-lg">Full practice tests to prepare for the USMLE STEP 1 exam.</p>
        <Link to="/exams/usmle" className="text-5xl text-right"><FontAwesomeIcon icon={faArrowRight} /></Link>
      </article>
    </section>
  );
}

export default Info;
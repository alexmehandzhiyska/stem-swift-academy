import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './SubjectChoice.css';

const SubjectChoice = () => {
  useEffect(() => Aos.init({ duration: 1000 }), []);

  return (
    <section className="w-screen wrapper flex justify-center items-center mt-40">
      <article data-aos="fade-down" className="mt-16 w-1/2 flex flex-col items-center">
        <section>
          <h1 className="cursive-text -mt-16 text-9xl">A</h1>
          <h2 className="cursive-text mt-24 text-2xl">B</h2>
          <h3 className="cursive-text -mt-36 ml-24 text-2xl">C</h3>
        </section>

        <section className="btn-wrapper">
          <Link to="/exams/sat" state={{ subject: 'english' }}><button className="btn english-choice">English</button></Link>
        </section>
      </article>

      <article data-aos="fade-down" className="mt-16 w-1/2 flex flex-col items-center">
        <section>
          <h1 className="cursive-text -mt-16 text-9xl">6</h1>
          <h2 className="cursive-text mt-24 text-2xl">1</h2>
          <h3 className="cursive-text -mt-36 ml-24 text-2xl">8</h3>
        </section>

        <section>
          <Link to="/exams/sat" state={{ subject: 'math' }}><button className="btn math-choice">Math</button></Link>
        </section>
      </article>
    </section>
  );
}

export default SubjectChoice;
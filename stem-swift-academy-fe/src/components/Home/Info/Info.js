import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import './Info.css';

const Info = () => {
  return (
    <section className="mt-28 cards flex justify-evenly text-white">
      <article className="card flex flex-col my-40 px-8 py-8 w-1/3 bg-blue-500">
        <h1 className="mb-8 font-semibold text-2xl text-center">SAT English Preparation</h1>
        <p className="mb-4 text-lg">Full practice tests, covering the reading and the writing sections + flashcards.</p>
        <Link to="/exams/english" className="text-5xl text-right"><FontAwesomeIcon icon={faArrowRight} /></Link>
      </article>

      <article className="card flex flex-col my-40 px-8 py-8 w-1/3 bg-blue-500">
        <h1 className="mb-8 font-semibold text-2xl text-center">SAT Math Preparation</h1>
        <p className="mb-4 text-lg">Full practice tests, covering the math section + full Algebra and Geometry courses.</p>
        <Link to="/exams/math" className="text-5xl text-right"><FontAwesomeIcon icon={faArrowRight} /></Link>
      </article>
    </section>
  );
}

export default Info;
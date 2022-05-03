import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import '../Banner/Banner.css';

const Banner = () => {
  useEffect(() => Aos.init({ duration: 1000 }), []);
  
  return (
    <section className="banner flex flex-col items-center justify-center text-white">
      <h1 data-aos="zoom-in" className="heading title" id="main-title">STEM SWIFT ACADEMY</h1>
      <p data-aos="zoom-in" className="description text-3xl">Studying for the exams can be interesting and fun. Prepare with STEM Swift Academy!</p>
    </section>
  );
}

export default Banner;

import { useEffect } from 'react';

import Chart from './Chart';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Results = () => {
  useEffect(() => Aos.init({ duration: 1500 }), []);
  
  return (
    <section data-aos="fade-down" className="mt-40">
      <h1 className="heading">Average results</h1>
      <Chart></Chart>
    </section>
  );
}

export default Results;

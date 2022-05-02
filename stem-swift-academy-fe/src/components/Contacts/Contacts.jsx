import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import "./Contacts.css";

const Contacts = () => {
  useEffect(() => Aos.init({ duration: 1000 }), []);
  
  return (
    <section className="max-w-full w-screen flex flex-col items-center">
      <h1 data-aos="zoom-in" className="heading">Contact Us</h1>

      <article className="contacts my-20 flex">
        <section data-aos="flip-left" className="contact mx-10 px-10 py-8 text-white bg-blue-500 text-center">
          <h2 className="mb-4 text-3xl font-bold">Visit Us</h2>
          <p className="pt-2 text-lg">Blagoevgrad, Bulgaria, ul. Pirov</p>
          <p className="pt-2 text-lg">Plovdiv, Bulgaria, ul. Bonev</p>
          <p className="pt-2 text-lg">Varna, Bulgaria, ul. Podvis</p>
        </section>

        <section data-aos="flip-left" className="contact mx-10 px-10 py-8 text-white bg-blue-500 text-center">
          <h2 className="mb-4 text-3xl font-bold">Call Us</h2>
          <p className="pt-2 text-lg">+3598 636 217 12</p>
          <p className="pt-2 text-lg">+3598 456 152 54</p>
          <p className="pt-2 text-lg">+3598 462 195 82</p>
        </section>

        <section data-aos="flip-left" className="contact mx-10 px-10 py-8 text-white bg-blue-500 text-center">
          <h2 className="mb-4 text-3xl font-bold">Message Us</h2>

          <p className="pt-2 text-lg">alex.mehandzhiyska@stemswift.com</p>
          <p className="pt-2 text-lg">john.doe@stemswift.com</p>
          <p className="pt-2 text-lg">luke.smith@stemswift.com</p>
        </section>
      </article>

      <article className="flex my-8">
        <iframe data-aos="fade-down" title="offices" className="map" src="https://www.google.com/maps/d/embed?mid=1LBK-1G5m181k-Qq4-IGPbijRWpjTxc4d"></iframe>
      </article>
    </section>
  );
}

export default Contacts;
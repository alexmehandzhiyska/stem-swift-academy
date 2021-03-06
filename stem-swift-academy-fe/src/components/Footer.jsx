import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="pr-20 pl-10 flex justify-between text-white bg-blue-500 max-w-full">
      <section className="py-1 flex items-center">
        <a href="/"><img className="w-56 mx-3"
          src="https://res.cloudinary.com/drinka/image/upload/v1647941133/sat-academy/images/ssa-logo-shrinked_bgrqz1.png"
          alt="STEM Swift Academy logo" /></a>
      </section>

      <section className="flex items-center">
        <nav>
          <ul className="flex">
            <li className="mx-4"><a href="https://www.facebook.com/stemswiftacademy/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
            </a></li>

            <li className="mx-4"><a href="https://www.instagram.com/stemswiftacademy/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
            </a></li>

            <li className="mx-4"><a href="https://www.youtube.com/channel/UCm45_C35c7M64fvscNwaW8A" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
            </a></li>

            <li className="mx-4"><a href="https://www.linkedin.com/in/alexandrina-mehandzhiyska/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"></FontAwesomeIcon>
            </a></li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="pr-20 pl-10 flex justify-between text-white bg-blue-500">
      <section className="py-1 flex items-center">
        <a href="/"><img className="w-14 mx-3"
          src="https://res.cloudinary.com/drinka/image/upload/v1641821825/sat-academy/images/STEM_Swift_Academy_4_rs5k5m.png"
          alt="STEM Swift Academy logo" /></a>
        <h1 className="ml-5 text-3xl text-white font-medium">STEM Swift Academy</h1>
      </section>

      <section className="flex items-center">
        <nav>
          <ul className="flex">
            <li className="mx-4"><a href="https://www.facebook.com/alex.mehandzhiyska/">
              <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
            </a></li>

            <li className="mx-4"><a href="https://www.instagram.com/alexmehandzhiyska/">
              <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
            </a></li>

            <li className="mx-4"><a href="https://www.youtube.com/channel/UCm45_C35c7M64fvscNwaW8A">
              <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
            </a></li>

            <li className="mx-4"><a href="https://www.linkedin.com/in/alexandrina-mehandzhiyska/">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x"></FontAwesomeIcon>
            </a></li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
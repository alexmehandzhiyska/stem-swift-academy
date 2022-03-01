import Lottie from "react-lottie";
import animationData from '../loading-animations/2275-loading-book.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice'
    }
  };
  
  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    ></Lottie>
  );
}

export default LottieAnimation;
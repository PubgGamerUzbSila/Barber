import heroCss from "./hero.module.css";
import heroLeftImg from '../../assets/img/heroLeftImg.png'
const Hero = () => {
  return (
    <>
      <div className={heroCss.container}>
        <div className={heroCss.heroRight}>
          <div className={heroCss.sariqOq}>
            
            <h4>
              <span>Hairstyle</span> Reflects The Personality Inside You
              <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page w hen looking at.
          </p>
            </h4>
          </div>

          <button>Get Started</button>
        </div>
        <div className={heroCss.heroLeft}>
           <img src={heroLeftImg} alt="" />
        </div>
      </div>
    </>
  );
};
export default Hero;

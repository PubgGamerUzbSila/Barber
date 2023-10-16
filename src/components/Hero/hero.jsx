import heroCss from "./hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={heroCss.container}>
        <div className={heroCss.heroRight}>
          <div className={heroCss.sariqOq}>
            <h4>
              <span>Hairstyle</span> Reflects The Personality Inside You
            </h4>
          </div>
          <p>
            It is a long established fact that a reader will be  distracted by
            the readable content of a page w hen looking at.
          </p>
          <button>Get Started</button>
        </div>
        <div className={heroCss.heroLeft}></div>
      </div>
    </>
  );
};
export default Hero;

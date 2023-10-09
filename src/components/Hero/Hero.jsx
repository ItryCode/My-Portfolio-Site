import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 data-text="Hey,i'm Sonu" className={styles.title}>
          Hey,i'm Sonu
        </h1>
        <p className={styles.description}>
          I am a Web consultant commited to bringing your ideas into reality!
        </p>
        <a href="mailto:sonuhrajeev@gmail.com" className={styles.contactBtn}>
          Let's Talk
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;

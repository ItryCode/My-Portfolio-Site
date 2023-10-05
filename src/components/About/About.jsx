import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="question" />
            <div className={styles.aboutItemText}>
              <h3>Who am i?</h3>
              <p>
                A programmer hailing from India(aka the land of the techies) who
                can be trusted with all your Web related needs.My goal is to
                ensure that i make the client's abstract ideas and vision into a
                solid,concrete form.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have dabbled in Microsoft Azure along with it's various
                offerings such as it's incredible AI vision and form recognizer
                services.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui-icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UXDeveloper</h3>
              <p>
                I have designed multiple landing pages and posters for a variety
                of clients
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

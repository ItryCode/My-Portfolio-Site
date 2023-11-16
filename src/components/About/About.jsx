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
          src={getImageUrl("about/aboutImage.svg")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="question" />
            <div className={styles.aboutItemText}>
              <h3>Who am i?</h3>
              <p>
                A programmer hailing from India who can be trusted with all your
                Web related needs. My aim is to transform the client's abstract
                ideas and vision into a solid,concrete form and thereby Ensuring
                101% customer satisfaction
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                Designing , Developing and problem solving.Being a web developer
                allows me to scratch all of those itches. I have dabbled in a
                variety of website development technologies in both the frontend
                and backend aspects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui-icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Developer</h3>
              <p>
                I specialize in ensuring that the balance between customer
                satisfaction,user engagement and design fundamentals are met.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

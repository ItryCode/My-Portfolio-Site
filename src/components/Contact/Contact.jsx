import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Information</h2>
        <p>Get in touch with me</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a className={styles.url} href="mailto:sonuhrajeev@gmail.com">
            sonuhrajeev@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a
            className={styles.url}
            href="https://www.linkedin.com/in/sonu-rajiev/"
          >
            linkedin.com/sonu-rajiev
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a className={styles.url} href="https://github.com/">
            github.com/ItryCode
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

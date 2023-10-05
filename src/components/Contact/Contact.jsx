import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me for anything IT related!</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:sonuhrajeev@gmail.com">sonuhrajeev@gmail.com</a>
        </li>
        <li>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/sonu-rajiev/">
            linkedin.com/sonu-rajiev
          </a>
        </li>
        <li>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/">github.com/ItryCode</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

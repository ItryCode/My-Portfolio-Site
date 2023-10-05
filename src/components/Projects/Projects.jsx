import React, { useEffect, useState } from "react";
import { useFetchProjects } from "../../fetchProjects";
import styles from "./Projects.module.css";
const Projects = () => {
  const { projects } = useFetchProjects();
  console.log(projects);
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => {
          const { demo, description, skills, id, img, source, title } = project;
          return (
            <div key={id} className={styles.pcontainer}>
              <img
                src={img}
                alt={`Image of ${project.title}`}
                className={styles.image}
              />
              <h3 className={styles.ptitle}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <ul className={styles.skills}>
                {skills.map((skill, id) => {
                  return (
                    <li className={styles.skill} key={id}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.links}>
                <a className={styles.link} href={demo}>
                  Demo
                </a>
                <a className={styles.link} href={source}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

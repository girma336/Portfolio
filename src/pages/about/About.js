import React from 'react';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/cv.pdf';
import Info from './Info';
import Stats from './Stats';
import './About.css';
import Skill from './Skill';
import { resume } from '../../components/data';
import Resume from './Resume';

const About = () => (
  <main className="section container">
    <section className="about">
      <h2 className="section__title">
        About
        {' '}
        <span>Me</span>
      </h2>

      <div className="about__container grid">
        <div className="about__info">
          <h3 className="section__subtitle">Personal Infos</h3>
          <ul className="info__list grid">
            <Info />
          </ul>
          <a href={CV} download="" className="button">
            Download CV
            <span className="button__icon">
              <FaDownload />
            </span>
          </a>
        </div>

        <div className="stats grid">
          <Stats />
        </div>
      </div>
    </section>

    <div className="separator" />

    <section className="skills">
      <h3 className="section__subtitle subtitle__center">My Skills</h3>
      <div className="skills__container grid">
        <Skill />
      </div>
    </section>

    <div className="separator" />

    <section className="resume">
      <h3 className="section__subtitle subtitle__center">Experience and Education</h3>
      <div className="resume__container grid">
        <div className="resume__data">
          {resume
            .filter((val) => val.category === 'experience')
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            .map((val) => <Resume key={val.id} {...val} />)}
        </div>
        <div className="resume__data">
          {resume
            .filter((val) => val.category === 'education')
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            .map((val) => <Resume key={val.id} {...val} />)}
        </div>
      </div>
    </section>
  </main>
);

export default About;

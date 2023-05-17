import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Profile from '../../assets/PSX_20230113_184823.jpg';
import './Home.css';

const Home = () => (
  <section className="home section grid">
    <img src={Profile} alt="" className="home__img" />
    <div className="home__content">
      <div className="home__data">
        <h1 className="home__title">
          <span>I&apos;m Girma Tarekegn.</span>
          {' '}
          Web developer
        </h1>
        <Typewriter
          className="type-write"
          options={{
            strings: ["I'm Girma Tarekegn",
              "I'm a Full Web Stack Developer",
              'I Love Software Development',
              'I Love All My Subscribers'],
            autoStart: true,
            loop: true,
          }}
        />

        <p className="home__description">
          Full Stack web developer and open-source enthusiast with a love for clean code
          and accessible design. Pair-programming and remote work aficionado. Fluent in
          multiple languages, frameworks, and technologies, and capable of
          ramping up quickly and efficiently.
          {' '}
        </p>

        <Link to="/about" className="button">
          More About Me
          {' '}
          <span className="button__icon"><FaArrowRight /></span>
        </Link>
      </div>
    </div>

    <div className="color__block" />
  </section>
);

export default Home;

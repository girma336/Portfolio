import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { portfolios } from '../../components/data';
import PortfolioShow from './PortfolioShow';
import './Portfolio.css';

const Portfolio = () => (
  <section className="portfolio section">
    <h2 className="section__title">
      My
      <span>Portfolio</span>
    </h2>
    <div className="portfolio__container container grid">
      {/* eslint-disable-next-line react/jsx-props-no-spreading  */}
      {portfolios.map((val) => <PortfolioShow key={val.id} {...val} />)}
    </div>
    <div className="container center_btn">
      <a target="_blank" href="https://github.com/girma336" rel="noreferrer" className="button">
        See More
        <span className="button__icon">
          <FaGithub />
        </span>
      </a>
    </div>

  </section>
);

export default Portfolio;

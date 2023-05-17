import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const Resume = ({
  icon, year, title, desc,
}) => (
  <div className="resume__item">
    <div className="resume__icon">{icon}</div>
    <span className="resume__date">{year}</span>
    <h3 className="resume__subtitle">{parse(title)}</h3>
    <p className="resume__description">{parse(desc)}</p>
  </div>
);

Resume.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Resume;

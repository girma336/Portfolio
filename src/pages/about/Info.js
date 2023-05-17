import React from 'react';
// import PropTypes from 'prop-types';
import { personalInfo } from '../../components/data';

const Info = () => (
  <>
    {personalInfo.map((valu) => (
      <li className="info__item" key={valu.id}>
        <span className="info__title">{valu.title}</span>
        <span className="info__description">{valu.description}</span>
      </li>
    ))}
  </>
);
// Info.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };
export default Info;

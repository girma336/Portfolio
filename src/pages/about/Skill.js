import React from 'react';
import { skills } from '../../components/data';

const Skill = () => (
  <>
    {skills.map(({ id, title, icon }) => (
      <div className="progress__box" key={id}>
        <img src={icon} alt={title} className="progress__circle" />
        <h3 className="skills__title">{title}</h3>
      </div>

    ))}
  </>
);

export default Skill;

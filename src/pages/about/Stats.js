import React from 'react';
import parse from 'html-react-parser';
import { stats } from '../../components/data';
import './About.css';

const Stats = () => (
  <>
    {stats.map(({ id, no, title }) => (
      <div className="stats__box" key={id}>
        <h3 className="stats__no">{no}</h3>
        <p className="stats__title">{parse(title)}</p>
      </div>
    ))}
  </>
);

export default Stats;

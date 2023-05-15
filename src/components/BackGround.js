import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import './Background.css';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return theme;
};
const BackGround = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleColor = (e) => {
    e.preventDefault();
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="style__switcher">
      <div role="button" tabIndex={0} className="theme__toggler" onClick={(e) => toggleColor(e)} onKeyDown={(e) => handleClick(e)}>
        { theme === 'light-theme' ? <BsMoon /> : <BsSun /> }
      </div>

    </div>
  );
};

export default BackGround;

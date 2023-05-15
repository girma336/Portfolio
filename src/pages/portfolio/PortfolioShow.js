import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';
import close from '../../assets/close.png';

const PortfolioShow = ({
  images, title, details, live,
}) => {
  const [modal, setModal] = useState(false);
  // console.log(details);
  // const handleClick = (e) => {
  //   e.preventDefault()
  // }
  const handleClick = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={images} alt="" className="portfolio__img" />
      <div className="portfolio__hover" role="button" tabIndex={0} onClick={(e) => handleClick(e)} onKeyDown={(e) => handleClick(e)}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal
        && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <div role="button" tabIndex={0} onClick={(e) => handleClick(e)} onKeyDown={(e) => handleClick(e)}>
              <img
                src={close}
                alt="close bar"
                className="modal__close"
              />
            </div>
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map((vale) => (
                <li className="modal__item" key={vale.id}>
                  <span className="item__icon">{vale.icon}</span>
                  <div>
                    <span className="item__title">{vale.title}</span>
                    <span className="item__details">{vale.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <img src={images} alt="" className="modal__img" />
            <a href={live} download="" className="button">
              See More
              <span className="button__icon">
                <FiExternalLink />
              </span>
            </a>
          </div>
        </div>
        )}
    </div>
  );
};

PortfolioShow.propTypes = {
  images: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.shape([]).isRequired,
  live: PropTypes.string.isRequired,
};
export default PortfolioShow;

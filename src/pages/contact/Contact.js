import React, { useRef, useState } from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import close from '../../assets/close.png';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    setMessage('');
  };
  const sendEmail = (e) => {
    e.preventDefault();
    form.current.value = '';
    emailjs.sendForm('service_978of24', 'template_na2e5yb', form.current, '0aSw4MRqmj4gTC8R9')
      .then((result) => {
        console.log(result.text);
        setMessage(result.text);
        form.current.value = null;
      }, (error) => {
        console.log(error.text);
        setMessage('');
      });
  };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In
        {' '}
        <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don&apos;t be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">tarekegngirma21@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+251 93 769 9280</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/girma-tarekegn/" className="contact__social-link">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/GirmaTarekegn5" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://github.com/girma336" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://github.com/girma336" className="contact__social-link">
              <FaGithub />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="user_name"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="user_email"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"

              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
              required
            />
          </div>
          <button type="button" className="button">
            Send Message
            <input type="submit" value="" />
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>

      { message === 'OK'
      && (
      <div className="modal-message">
        <div className="modal-message-content">
          <Link to="/">
            <div role="button" tabIndex={0} onClick={(e) => handleClick(e)} onKeyDown={(e) => handleClick(e)}>
              <img
              // role="button"
              // tabIndex={0}
                src={close}
                alt="close bar"
                className="modal__closes"
              />
            </div>
          </Link>
          <div className="modal-message">
            <Typewriter
              options={{
                strings: [
                  'Your message was',
                  'Succsesfuly have sant',
                  'Thank you !',
                  'Keep In Touch',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

        </div>
      </div>
      ) }
    </section>
  );
};

export default Contact;

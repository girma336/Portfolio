import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => (
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
          {/* <a href="https://github.com/girma336" className="contact__social-link">
              <FaYoutube />
            </a> */}
          <a href="https://github.com/girma336" className="contact__social-link">
            <FaGithub />
          </a>
        </div>
      </div>

      <form target="_blank" action="https://formsubmit.co/girmatarekegn.gi@gmail.com" method="POST">
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
              required
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
        <button type="submit" className="button">
          Send Message
          <input type="submit" value="" />
          <span className="button__icon contact__button-icon">
            <FiSend />
          </span>
        </button>
      </form>
    </div>
  </section>
);
export default Contact;

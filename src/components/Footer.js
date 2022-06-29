import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import config from '../../config';
export default function Footer() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('dani54196', 'template_wyt7ayw', form.current, 'user_tdRNXJZEsIE4IPNcYqo2Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contactanos</h2>
        <p>Consultoria gratuita incluida en tu desarrollo</p>
        <form method="post" ref={form} onSubmit={sendEmail}>
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="user_name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="user_email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map((social) => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Software of South. All rights reserved.</li>
          <li>
            Design: <a href="https://github.com/dani54196">dani54196</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

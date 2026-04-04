import React from 'react';
import './Footer.css';

const footerLinks = {
  Company: ['News', 'Studio', 'Service', 'Blog'],
  'Terms & Policies': ['Privacy Policy', 'Terms & Conditions', 'Captions', 'Accessibility'],
  'Follow Us': ['Instagram', 'LinkedIn', 'Youtube', 'Tik tok'],
  'Terms & Policies ': [
    '1285am Taskovic Ste. 8TE',
    '125 Chicago IL 63981',
    '',
    '(123) 456 789 555',
    '',
    'info@bc.elementum.com',
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer__col">
            <h4 className="footer__col-title">{title.trim()}</h4>
            <ul className="footer__list">
              {links.map((link, i) =>
                link ? (
                  <li key={i}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ) : (
                  <li key={i} className="footer__spacer" />
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <p>©2024 Elementum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

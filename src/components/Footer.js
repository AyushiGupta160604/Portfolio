import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="footer-heading">Other ways to Reach out</h5>
            <ul className="footer-list">
              <li>Email: ayushigupta36881@gmail.com</li>
              <li>Phone: +91 9284309107</li>
              <li>
                <a href="https://www.linkedin.com/in/ayushigupta1604/" className="footer-link">
                  <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                </a>
                <a href="https://twitter.com/AyushiG22087515" className="footer-link">
                  <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                </a>
                <a href="https://github.com/AyushiGupta160604" className="footer-link">
                  <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="footer-copyright">© {new Date().getFullYear()} Ayushi Gupta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Team Bolt Racers</h3>
          <p>Follow our journey and stay connected!</p>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Team Bolt Racers, MMMUT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react';
import './Home.css';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>

      {isVisible && (
        <button onClick={scrollToTop} className="backToTopBtn">
          <img src="https://img.icons8.com/ios/50/000000/up.png" alt="" />
        </button>
      )}

      <footer className='myFooter'>
        <div id='contacts' className='contacts'>
          <h3>Follow Us</h3>          
          <div className="social-icons">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios/50/000000/telegram-app.png" alt="Telegram" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios/50/000000/discord-logo.png" alt="Discord" />
            </a>
            <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios/50/000000/twitch.png" alt="Twitch" />
            </a>
          </div>          
        </div>
        <p>© 2024 Denmap. All rights reserved.</p>
      </footer>

    </div>

  );
};

export default Footer;

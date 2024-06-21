import React, { useState, useEffect } from 'react';
import './TextOverlay.css';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const TextOverlay = () => {
  const [minimized, setMinimized] = useState(false);
  const [hidden, setHidden] = useState(false);

  const openResume = () => {
    window.open("your_resume_link");
  }

  const toggleHidden = () => {
    setHidden(!hidden);
  };

    const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };

  useEffect(() => {
    const timer = setTimeout(() => setMinimized(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMinimized = () => {
    setMinimized(!minimized);
  };

  return (
    <div className="overlay-container" onClick={toggleHidden}>
        <p className="overlay-head"> <strong>MyPortfolio</strong> presents</p>
      <div className={`overlay-content ${minimized ? 'minimized' : ''}`} onClick={toggleMinimized}>
        <h1 className="overlay-title">Ayushi Gupta</h1>
        <div className={`overlay-content ${hidden ? 'hidden' : ''}`}>
            <p className="overlay-subtitle">#Technophile</p>
            <p className="overlay-description">
            Hey! Glad to have you here! 
        </p>
        </div>
        <div className="overlay-buttons">
          <button className="play-button" onClick={openResume}>
          <FontAwesomeIcon icon={faFile} className="icon" />
            Resume
        </button>
          <button className="info-button" onClick={toggleModal}>
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            About me
          </button>
        </div>
      </div>

      <Modal show={showModal} onClose={toggleModal}>
        <h2>More About Ayushi Gupta</h2>
        <p>Ayushi Gupta is a dynamic and dedicated pre-final year student pursuing her Bachelor's degree in Computer Science at Rajiv Gandhi Institute of Petroleum Technology which is an institute of national importance established by the government of India. With a strong foundation in both front-end and back-end development, Ayushi has honed her skills to become a proficient full-stack developer. Her expertise spans across a variety of technologies, including HTML, CSS, JavaScript, React for front-end development, and Node.js, Express, and MongoDB for back-end development.
          <br/>
          <br/>
        Exploring DevOps: <br/>
        In addition to her full-stack prowess, Ayushi is actively exploring the world of DevOps. She understands the critical importance of integrating development and operations to enhance the software development lifecycle. Her exploration includes hands-on experience with tools and practices such as: Docker, Kubernetes, CI/CD Pipelines etc.
        <br/>
        <br/>
        Programming in Java: <br/>
        Ayushi's programming repertoire is not limited to JavaScript and web technologies. She has a solid grasp of Java, a language she uses for various purposes including software engineering projects. 
        <br/>
        Her Java skills are evident in:<br/>
        <ul>
          <li>Object-Oriented Programming</li>
          <li>Algorithmic Problem Solving</li>
        </ul>
        As she approaches the final year of her degree, Ayushi aims to further deepen her knowledge in DevOps practices, refine her Java skills, and contribute to impactful projects. She is eager to leverage her comprehensive skill set to solve real-world problems and make meaningful contributions to the tech community.</p>
      </Modal>
    </div>
  );
};

export default TextOverlay;

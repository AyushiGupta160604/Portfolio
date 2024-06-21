import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BgVideo from '../components/BgVideo';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const HomeContainer = styled.div`
  margin-top: 60px;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const MovieCard = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

const NextWatchSection = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  width: 100%;
  img {
    width: 250px;
    height: 150px;
    margin-right: 15px;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.2);
  }


  &::-webkit-scrollbar {
  display: none;
}
`;

const TechDescription = styled.div`
  margin-top: 5px;
  font-size: 0.9rem;
  text-align: center;
`;

const SectionTitle = styled.h1`
  position: relative;
  font-size: 1.5rem;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #e50914;
    &::after {
      content: 'Explore All →';
      position: absolute;
      right: calc(80% - 120px);
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
      color: #1ed760;
      transition: right 0.3s ease, opacity 0.3s ease;
      opacity: 1;
    }
  }
  &::after {
    content: '';
    position: absolute;
    right: calc(100% - 10px);
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #1ed760;
    transition: right 0.3s ease, opacity 0.3s ease;
    opacity: 0;
  }
`;

const SelectWrapper = styled.div`
  margin-top: 20px;
`;

const SelectCategory = styled.select`
  padding: 8px;
  font-size: 1rem;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PageNumber = styled.button`
  background-color: ${(props) => (props.isActive ? '#1ed760' : '#e50914')};
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const showRepoLink = true;

const Home = () => {

  const location = useLocation();

  // useEffect(() => {
  //   const section = location.pathname.substring(1); // Get the section name from the path
  //   if (section) {
  //     const element = document.getElementById(section);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [location]);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('languages');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMovieGrid, setShowMovieGrid] = useState(true);
  const itemsPerPage = 6;

  const projects = [
    { 
      src: '/Blogging-Hub.png', 
      alt: 'Blogging-Hub', 
      description: "A comprehensive blogging platform.",
      repo: 'https://github.com/AyushiGupta160604/Blogging-Hub',
      details: "Blogging-Hub is a simple and elegant full-featured react based blogging platform that allows users to create, and manage their blog posts. It includes features like Viewing specific blog, creating a blog, and deleting a Blog." 
    },
    { src: '/nestpostcrud.png',
      alt: 'nest-postgres-crud', 
      description: "A NestJS CRUD application.",
      repo: 'https://github.com/AyushiGupta160604/nest-postgres-crud',
      details: "A simple CRUD application built with NestJS for managing postgreSQL databases. It demonstrates basic CRUD operations with a modern backend framework." 
    },
    { src: '/solacesphere-logo.jpg', 
      alt: 'SolaceSphere', 
      description: "A mental wellbeing web application",
      repo: 'https://github.com/AyushiGupta160604/SolaceSphere',
      details: "SolaceSphere is a personal sanctuary for mental wellbeing. It is dedicated to supporting your journey towards inner peace and emotional balance. Just as Earth's atmosphere shields and nurtures life, SolaceSphere surrounds you with tools and resources to foster mental health. Whether you seek relaxation techniques, mindfulness exercises, or guided meditation sessions, our comprehensive platform offers a variety of pathways to tranquility. It includes various features that cater to different aspects of emotional wellness." 
    },
    { src: '/ResumeNest-logo.jpeg', 
      alt: 'ResumeNest', 
      description: "A smart Resume building website",
      repo: 'https://github.com/AyushiGupta160604/ResumeNest',
      details: "ResumeNest, where crafting your perfect resume is as effortless as finding your favorite content on-demand. It is a smart resume building website designed to simplify and elevate your job application process. Begin by selecting from a variety of professionally designed templates, each optimized for different industries and roles. With easy editing capabilities to what has been generated and real-time previews, creating a standout resume has never been easier." 
    },
    { src: '/portfolio.png', 
      alt: 'Netflix Themed Portfolio', 
      description: "Portfolio website inspired by theme of netflix", 
      repo: 'https://github.com/AyushiGupta160604/Portfolio',
      details: "Just like your favorite streaming platform, the portfolio is designed for effortless exploration. Dive into my projects categorized where each project is presented with a thumbnail preview and a brief synopsis, much like the shows you love. Click on any project to see more details, from the description to the GitHub repo link. With an intuitive navigation, finding what you're looking for is as smooth as selecting your next binge-worthy series. Explore, discover, and enjoy the journey through my work—streamlined for your inspiration." 
    },
  ];

  const Techs = [
    { src: '/java.png', alt: 'Java', description: 'JAVA', category: 'languages' },
    { src: '/html.png', alt: 'HTML', description: 'HTML5', category: 'languages' },
    { src: '/css.jpeg', alt: 'CSS', description: 'CSS3', category: 'languages' },
    { src: '/js.png', alt: 'Javascript', description: 'JS', category: 'languages' },
    { src: '/latex.png', alt: 'LaTeX', description: 'LaTeX', category: 'languages' },
    { src: '/yaml.png', alt: 'YAML', description: "yet another markup language or yaml ain't markup language", category: 'languages' },
    { src: '/express.png', alt: 'Express.js', description: 'Express.js', category: 'frameworks' },
    { src: '/nest.jpg', alt: 'Nest.js', description: 'Nest.js', category: 'frameworks' },
    { src: '/react.png', alt: 'React.js', description: 'React.js', category: 'libraries' },
    { src: '/git.png', alt: 'Version Control', description: 'Git/ GitHub', category: 'tools' },
    { src: '/wsl.jpeg', alt: 'Linux', description: 'Ubuntu and WSL', category: 'tools' },
    { src: '/idea.jpeg', alt: 'IntelliJ IDEA', description: 'IntelliJ IDEA', category: 'tools' },
    { src: '/vs code.jpg', alt: 'Visual Studio code', description: 'VS Code', category: 'tools' },
    { src: '/docker.png', alt: 'Docker', description: 'Docker Desktop', category: 'tools' },
    { src: '/mongo.png', alt: 'MongoDB', description: 'MongoDB', category: 'tools' },
    { src: '/sql.png', alt: 'SQL tools', description: 'MySQL/PostgreSQL', category: 'tools' },
    { src: '/colab.png', alt: 'Colab', description: 'Google Colab', category: 'tools' },
    { src: '/jupyter.png', alt: 'Jupyter NB', description: 'Jupyter Notebook', category: 'tools' },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const renderModalContent = () => {
    if (modalContent === 'Projects') {
      return (
        <section>
        <div onClick={() => setShowMovieGrid(true)}>
          <h2>Projects Modal Content</h2>
        </div>
          {showMovieGrid && (
          <MovieGrid>
            {projects.map((project, index) => (
              <MovieCard key={index} onClick={() => openModal(project)}>
                <img src={project.src} alt={project.alt} />
                <p>{project.alt}</p>
              </MovieCard>
            ))}
          </MovieGrid>
        )}
        </section>
      );
    } else if (modalContent === 'Technologies') {
      return (
        <section>
        <div onClick={() => setShowMovieGrid(true)}>
        <h2>Projects Modal Content</h2>
        </div>
        {showMovieGrid && (
          <MovieGrid>
          {Techs.map((tech, index) => (
            <MovieCard key={index} onClick={() => openModal(tech)}>
              <img src={tech.src} alt={tech.alt}></img>
              <h3>{tech.alt}</h3>
            </MovieCard>
          ))}
          </MovieGrid>
          )}
        </section>
      );
    } else if (modalContent && typeof modalContent !== 'string') {
      return (
        <div>
          <h2>{modalContent.alt}</h2>
          <p>{modalContent.details}</p>
          {showRepoLink && (
            <a href={modalContent.repo} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          )}
        </div>
      );
    }
    return null;
  };

  const filteredTechs = Techs.filter((tech) => tech.category === selectedCategory);

  const totalPages = Math.ceil(filteredTechs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTechs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    const hash = location.hash.substring(1); // Get the hash from the URL
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section id="about">
    <HomeContainer>
      <div className="App">
        <BgVideo />
      </div>

      <Section id="projects">
        <SectionTitle onClick={() => openModal('Projects')}>
          Discover the Projects
        </SectionTitle>
        <NextWatchSection>
          {projects.map((project, index) => (
            <div key={index} title={project.description}
            onClick={() => openModal(project)}>
              <img src={project.src} alt={project.alt}/>
              <TechDescription>{project.alt}</TechDescription>
            </div>
          ))}
        </NextWatchSection>
      </Section>

      <Section>
        <SectionTitle onClick={() => openModal('Technologies')}>
          Explore Technologies
        </SectionTitle>

        <SelectWrapper>
          <SelectCategory value={selectedCategory} onChange={handleCategoryChange}>
            <option value="languages">Languages</option>
            <option value="frameworks">Frameworks</option>
            <option value="libraries">Libraries</option>
            <option value="tools">Tools</option>
          </SelectCategory>
        </SelectWrapper>

        <NextWatchSection>
          {currentItems.map((tech, index) => (
            <div key={index} title={tech.description}>
              <img src={tech.src} alt={tech.alt} />
              <TechDescription>{tech.alt}</TechDescription>
            </div>
          ))}
        </NextWatchSection>

        {totalPages > 1 && (
          <PaginationControls>
            {Array.from({ length: totalPages }, (_, index) => (
              <PageNumber
                key={index + 1}
                onClick={() => paginate(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PageNumber>
            ))}
          </PaginationControls>
        )}
      </Section>

      <Modal show={showModal} onClose={closeModal}>
      {renderModalContent()}
      </Modal>
      <section id="contact">
      <Contact id="contact"/>
      <Footer />
      </section>
    </HomeContainer>
    </section>
  );
};

export default Home;
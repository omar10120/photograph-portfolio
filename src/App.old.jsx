import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import './App.css';
import { useState } from 'react';

const HeroSection = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4a9eff;
    }
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const Button = styled(motion.button)`
  background-color: #4a9eff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3182ce;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;

const CurvedLine = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  overflow: hidden;
  
  svg {
    position: absolute;
    right: -5%;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: auto;
  }

  path {
    fill: none;
    stroke: rgba(74, 158, 255, 0.1);
    stroke-width: 2;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 5%;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -50px;
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #ff6b6b, #4a9eff);
    filter: blur(120px);
    opacity: 0.05;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -50px;
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #4a9eff, #4ecdc4);
    filter: blur(120px);
    opacity: 0.05;
    border-radius: 50%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  font-weight: bold;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServiceItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: rgba(74, 158, 255, 0.1);
    border-radius: 50%;
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const PortfolioSection = styled.section`
  padding: 6rem 5%;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 3/2;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1rem;

    h3 {
      color: white;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#4a9eff' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#3182ce' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const services = [
  { id: 1, title: 'Business Plan', icon: '💼' },
  { id: 2, title: 'Marketing Strategy', icon: '📊' },
  { id: 3, title: 'Photography', icon: '📸' },
  { id: 4, title: 'Videography', icon: '🎥' },
  { id: 5, title: 'Graphic Design', icon: '🎨' },
  { id: 6, title: 'Social Media Marketing', icon: '📱' },
  { id: 7, title: 'Search Engine Optimization', icon: '🔍' },
  { id: 8, title: 'Paid Ads', icon: '💰' },
  { id: 9, title: 'Websites & Apps', icon: '💻' },
  { id: 10, title: 'AI Solutions', icon: '🤖' },
  { id: 11, title: 'E-commerce Platforms', icon: '🛒' }
];

const portfolioItems = [
  {
    id: 1,
    title: 'Nature Photography',
    category: 'photography',
    description: 'Capturing the beauty of nature',
    image: 'images/paid-ads-bg'
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'graphic-design',
    description: 'Modern brand design',
    image: 'images/paid-ads-bg'
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'marketing',
    description: 'Engaging social content',
    image: 'images/paid-ads-bg'
  },
  {
    id: 4,
    title: 'Product Video',
    category: 'video',
    description: 'Professional product showcase',
    image: 'images/paid-ads-bg'
  },
  {
    id: 5,
    title: 'Website Design',
    category: 'web',
    description: 'Modern web experience',
    image: 'images/paid-ads-bg'
  },
  {
    id: 6,
    title: 'Marketing Strategy',
    category: 'marketing',
    description: 'Comprehensive marketing plan',
    image: 'images/paid-ads-bg'
  }
];

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'photography', 'graphic-design', 'marketing', 'video', 'web'];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div>
      <Nav>
        <Logo>LOGO</Logo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#photography">Photography</a>
          <a href="#videos">Videos</a>
          <a href="#graphic-design">Graphic Design</a>
          <a href="#social-media">Social Media Marketing</a>
          <a href="#paid-ads">Paid ads</a>
          <a href="#contact">Contact</a>
        </NavLinks>
        <LanguageSelector>
          EN ▼
        </LanguageSelector>
      </Nav>

      <HeroSection>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            YOUR STRATEGIC<br />
            MARKETING PARTNER
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Your vision<br />
            into Impactful Results
          </Subtitle>
          <Button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW SERVICES
          </Button>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <CurvedLine
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg viewBox="0 0 200 800" preserveAspectRatio="none">
            <path d="M 0 0 C 50 200, 150 400, 100 800" />
            <path d="M 50 0 C 100 200, 200 400, 150 800" strokeOpacity="0.5" />
            <path d="M 100 0 C 150 200, 250 400, 200 800" strokeOpacity="0.2" />
          </svg>
        </CurvedLine>
        <SectionTitle>WHAT WE DO</SectionTitle>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255, 255, 255, 0.06)',
              }}
            >
              <span className="icon" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h3>{service.title}</h3>
            </ServiceItem>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <PortfolioSection>
        <SectionTitle>OUR WORK</SectionTitle>
        <FilterButtons>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterButtons>
        <PortfolioGrid>
          {filteredItems.map(item => (
            <PortfolioItem
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
 
              </div>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </PortfolioSection>
    </div>
  );
}

export default App;

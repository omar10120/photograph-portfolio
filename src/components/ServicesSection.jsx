import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesContainer = styled.section`
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

const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
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
    </ServicesContainer>
  );
};

export default ServicesSection;

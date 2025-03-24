import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import heroImage from '../images/photography_GIF.gif';

const HeroContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 2;
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

const HeroSection = () => {
  return (
    <HeroContainer id="home">
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
    </HeroContainer>
  );
};

export default HeroSection;

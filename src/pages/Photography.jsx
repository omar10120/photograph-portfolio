import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import food1 from '../images/food/food1.jpg';
import food2 from '../images/food/food2.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
`;

const HeroSection = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  margin-top: -80px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
              url(${food1}) center/cover no-repeat fixed;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  z-index: 2;
  position: relative;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  background: linear-gradient(135deg, #fff 0%, #d1d1d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: #f8f9fa;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ContactButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 6rem 5%;
  background: ${props => props.alternate ? '#222' : '#1a1a1a'};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled(motion.div)`
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #fff 0%, #d1d1d1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #f8f9fa;
    margin-bottom: 1.5rem;
  }
`;

const Photography = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Title>Capturing Culinary Artistry in Every Frame</Title>
          <Description>
            Discover our food photography portfolio where we transform everyday dishes into visual masterpieces. 
            Each shot is carefully crafted to highlight textures, colors, and the authentic beauty of every dish.
          </Description>
          <ContactButton to="/contact">Contact Us</ContactButton>
        </HeroContent>
      </HeroSection>

      <Section>
        <Grid>
          <ImageContainer
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={food2} alt="Shawarma Wrap on Wooden Board" />
          </ImageContainer>
          <ContentContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Shawarma Wrap on Wooden Board</h2>
            <p>
              A rustic yet elegant composition featuring a perfectly wrapped shawarma on an artisanal wooden board. 
              The natural lighting accentuates the textures of the wrap while the wooden board adds warmth and authenticity to the scene.
            </p>
            <p>
              Every detail is meticulously captured - from the slight char on the wrap to the fresh ingredients peeking through. 
              The composition tells a story of traditional Middle Eastern cuisine presented with modern sophistication.
            </p>
          </ContentContainer>
        </Grid>
      </Section>

      <Footer />
    </PageContainer>
  );
};

export default Photography;

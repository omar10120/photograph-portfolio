import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import bgImage from '../images/hero-bg.jpg';
import social1 from '../images/social1.jpg';
import social2 from '../images/social2.jpg';
import social3 from '../images/social3.jpg';
import social4 from '../images/social4.jpg';
import social5 from '../images/social5.jpg';
import social6 from '../images/social6.jpg';
import elmirRestaurant from '../images/elmir-restaurant.jpg';
import sabkehRestaurant from '../images/sabkeh-restaurant.jpg';

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
              url(${bgImage}) center/cover no-repeat fixed;
  
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
  margin-left: 2rem;

  @media (min-width: 768px) {
    margin-left: 4rem;
  }
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
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 600px;
  color: #f8f9fa;
`;

const ContactButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  padding: 1.2rem 3rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }
`;

const Section = styled.section`
  padding: 6rem 5%;
  background: ${props => props.alternate ? '#222' : '#1a1a1a'};
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 4rem;
  max-width: 800px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #aaa;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const SocialDesignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const GraphicDesign = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Title>We Create Impactful Visuals That Tell Your Story and Grab Attention.</Title>
          <Description>
            At Elements, we provide extensive graphic design services that captivate your audience and elevate your
            brand's visual identity. From eye-catching logos to compelling marketing materials, we create designs that
            speak volumes and make a memorable impact. Discover how we can turn your ideas into visually striking realities!
          </Description>
          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </ContactButton>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Social Media Design</SectionTitle>
        <SectionSubtitle>+1,500 Ideation and Graphic Design for 50 Happy Clients in Different Sectors and Cities</SectionSubtitle>
        <SocialDesignGrid>
          <motion.img 
            src={social1}
            alt="Now in Erbil"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.img 
            src={social2}
            alt="Coffee Shop Design"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.img 
            src={social3}
            alt="Restaurant Menu"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img 
            src={social4}
            alt="Travel Agency"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.img 
            src={social5}
            alt="Product Launch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.img 
            src={social6}
            alt="Event Promotion"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </SocialDesignGrid>
      </Section>

      <Section alternate>
        <SectionTitle>Branding</SectionTitle>
        <SectionSubtitle>Creating a unique identity for a product or client, using elements like a name, logo, and design to convey its values and differentiate it from competitors.</SectionSubtitle>
        <ProjectsGrid>
          <ProjectCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={elmirRestaurant} alt="Elmir Restaurant Branding" />
            <ProjectContent>
              <h3>Elmir Restaurant</h3>
              <p>A distinguished restaurant branding that celebrates Arabic cuisine, incorporating a dark green color palette symbolizing growth and luxury. The logo is crafted using elegant Arabic calligraphy, reflecting cultural heritage.</p>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={sabkehRestaurant} alt="Sabkeh Restaurant Branding" />
            <ProjectContent>
              <h3>Sabkeh Restaurant</h3>
              <p>A modern restaurant branding that combines elegance with a touch of playfulness, using a sophisticated color palette of black, white, and beige. The brand's logo features a cursive font with the letter 'S' creatively resembling a spatula.</p>
            </ProjectContent>
          </ProjectCard>
        </ProjectsGrid>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default GraphicDesign;

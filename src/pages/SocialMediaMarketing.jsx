import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import socialMediaBg from '../images/social-media-bg.jpg';
import socialMediaIcons from '../images/social-media-icons.jpg';
import socialMediaBenefits from '../images/social-media-benefits.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  padding-top: 80px;
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
              url(${socialMediaBg}) center/cover no-repeat fixed;
  
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
  background: ${props => props.alternate ? '#242424' : 'transparent'};
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  strong {
    display: block;
    color: #007bff;
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  p {
    color: #f8f9fa;
    line-height: 1.7;
    font-size: 1.1rem;
    opacity: 0.95;
  }
`;

const ImageContainer = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  height: fit-content;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transform: scale(1);
    transition: transform 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }

  h3 {
    color: #007bff;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    color: #f8f9fa;
    line-height: 1.6;
    opacity: 0.9;
    font-size: 1.1rem;
  }
`;

const SocialMediaMarketing = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Title>Stop Scrolling, Start Connecting: Build a Thriving Social Media Presence</Title>
          <Description>
            Connect with your target audience, build brand awareness, and drive business growth through
            engaging social media strategies.
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
        <Grid>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle style={{ marginBottom: '3.5rem' }}>Why Elements?</SectionTitle>
            <FeatureList>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div>
                  <strong>Platform Expertise</strong>
                  <p>We have a deep understanding of leading social media platforms like Facebook, Instagram,
                  LinkedIn, and others that are relevant to your target audience in Iraq and the UAE.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <strong>Content Marketing Specialists</strong>
                  <p>Our team creates high-quality content that resonates with your audience and
                  drives engagement.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <strong>Community Building Experts</strong>
                  <p>We foster meaningful connections with your target audience, building brand
                  loyalty and advocacy.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <strong>Data-Driven Approach</strong>
                  <p>We use data and analytics to tailor strategies, optimize campaigns, and deliver
                  measurable results.</p>
                </div>
              </FeatureItem>
            </FeatureList>
          </motion.div>
          <ImageContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={socialMediaIcons} alt="Social Media Marketing Expertise" />
          </ImageContainer>
        </Grid>
      </Section>

      <Section alternate>
        <SectionTitle style={{ textAlign: 'center', marginBottom: '4rem' }}>We Offer</SectionTitle>
        <ServicesList>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Social Media Strategy Development</h3>
            <p>Develop a tailored social media strategy aligned with your marketing goals and target audience.</p>
          </ServiceCard>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Content Creation & Management</h3>
            <p>Craft engaging and visually appealing content (text, images, videos) for various social media platforms.</p>
          </ServiceCard>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Community Management</h3>
            <p>Actively manage your social media presence, respond to comments and messages, and foster meaningful interactions with your audience.</p>
          </ServiceCard>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Social Media Advertising</h3>
            <p>Run targeted advertising campaigns on social media platforms to reach specific demographics and interests.</p>
          </ServiceCard>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3>Social Media Analytics & Reporting</h3>
            <p>Track key metrics, analyze social media performance, and provide regular reports to demonstrate the impact of your campaigns.</p>
          </ServiceCard>
        </ServicesList>
      </Section>

      <Section>
        <Grid style={{ alignItems: 'center' }}>
          <ImageContainer
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={socialMediaBenefits} alt="Social Media Benefits" />
          </ImageContainer>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle style={{ marginBottom: '3.5rem' }}>Benefits</SectionTitle>
            <FeatureList>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div>
                  <strong>Increased Brand Awareness</strong>
                  <p>Reach a wider audience and establish your brand presence on key social media platforms.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <strong>Enhanced Brand Engagement</strong>
                  <p>Build stronger relationships with your customers, foster community, and generate positive word-of-mouth.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <strong>Targeted Lead Generation</strong>
                  <p>Identify and attract qualified leads who are interested in your products or services.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <strong>Improved Customer Service</strong>
                  <p>Provide real-time customer support and enhance brand reputation through social media channels.</p>
                </div>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <strong>Measurable Results</strong>
                  <p>Track and analyze social media performance to optimize campaigns and demonstrate ROI (Return On Investment).</p>
                </div>
              </FeatureItem>
            </FeatureList>
          </motion.div>
        </Grid>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default SocialMediaMarketing;

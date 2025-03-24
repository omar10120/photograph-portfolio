import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import paidAdsBg from '../images/paid-ads-bg.jpg';
import paidAdsServices from '../images/paid-ads-services.jpg';
import paidAdsBenefits from '../images/paid-ads-benefits.jpg';

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
              url(${paidAdsBg}) center/cover no-repeat fixed;
  
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ServiceItem = styled(motion.div)`
  h3 {
    color: #007bff;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  p {
    color: #f8f9fa;
    line-height: 1.6;
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BenefitItem = styled(motion.li)`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  strong {
    color: #007bff;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    color: #f8f9fa;
    line-height: 1.6;
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const ImageContainer = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

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

const PaidAds = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Title>Stop Wasting Money! Get Targeted Paid Ads That Convert</Title>
          <Description>
            Targeted social media, Google, and LinkedIn advertising to reach the right customers and achieve
            your marketing goals.
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
          <ImageContainer
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={paidAdsServices} alt="Paid Advertising Services" />
          </ImageContainer>
          <ServiceList>
            <SectionTitle>We Offer</SectionTitle>
            <ServiceItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Social Media Ads</h3>
              <p>Manage and optimize ad campaigns across various platforms (Facebook, Instagram, LinkedIn, etc.).</p>
            </ServiceItem>
            <ServiceItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Google Ads</h3>
              <p>Develop and manage targeted search engine advertising campaigns to reach potential customers actively searching for your products or services.</p>
            </ServiceItem>
            <ServiceItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>LinkedIn Ads</h3>
              <p>Reach professionals and B2B decision-makers on the world's largest professional network.</p>
            </ServiceItem>
          </ServiceList>
        </Grid>
      </Section>

      <Section alternate>
        <Grid>
          <div>
            <SectionTitle>Benefits</SectionTitle>
            <BenefitsList>
              <BenefitItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <strong>Reach the correct audience</strong>
                  <p>Target potential customers based on demographics, interests, and online behavior.</p>
                </div>
              </BenefitItem>
              <BenefitItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div>
                  <strong>Boost brand awareness</strong>
                  <p>Increase your brand visibility and recognition in the market.</p>
                </div>
              </BenefitItem>
              <BenefitItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <strong>Drive targeted traffic</strong>
                  <p>Generate qualified leads and website visitors who will likely convert.</p>
                </div>
              </BenefitItem>
              <BenefitItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <strong>Increase conversions & sales</strong>
                  <p>Turn website visitors into paying customers.</p>
                </div>
              </BenefitItem>
              <BenefitItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <strong>Measurable results</strong>
                  <p>Track and analyze campaign performance to optimize for better results.</p>
                </div>
              </BenefitItem>
            </BenefitsList>
          </div>
          <ImageContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={paidAdsBenefits} alt="Paid Advertising Benefits" />
          </ImageContainer>
        </Grid>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default PaidAds;

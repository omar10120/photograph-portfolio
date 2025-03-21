import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #141414;
  color: white;
  padding: 4rem 5% 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4a9eff;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: #4a9eff;
      transform: translateY(-3px);
    }

    svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
            We are a creative agency specializing in photography, design, and digital marketing solutions. Our mission is to transform your vision into impactful results.
          </p>
          <SocialLinks>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 0 1 5.5 16.898a5.778 5.778 0 0 0 4.252-1.189 2.879 2.879 0 0 1-2.684-1.995 2.88 2.88 0 0 0 1.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 0 1-.889-3.835 8.153 8.153 0 0 0 5.92 3.001 2.876 2.876 0 0 1 4.895-2.62 5.73 5.73 0 0 0 1.824-.697 2.884 2.884 0 0 1-1.263 1.589 5.73 5.73 0 0 0 1.649-.453 5.765 5.765 0 0 1-1.433 1.489z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.992 18.012c-.24.36-.937.72-1.84.36-3.12-1.44-7.2-3.24-7.2-3.24s-1.68-1.08-1.8-1.8c-.12-.72 0-1.2.36-1.68.36-.48 7.2-7.2 7.2-7.2s.6-.6 1.2-.6c.6 0 1.2.6 1.2 1.2v12c0 .6-.24 1.08-.48 1.44z"/>
              </svg>
            </motion.a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Services</h3>
          <ul>
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/videos">Videography</Link></li>
            <li><Link to="/graphic-design">Graphic Design</Link></li>
            <li><Link to="/social-media">Digital Marketing</Link></li>
            <li><Link to="/web-development">Web Development</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <ContactInfo>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Erbil - English Village
          </ContactInfo>
          <ContactInfo>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            info@elements-creative.com
          </ContactInfo>
          <ContactInfo>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            00964 771 925 0760
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <p> {new Date().getFullYear()} Elements Creative. All rights reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

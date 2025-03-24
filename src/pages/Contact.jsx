import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import contactImage from '../images/contact-image.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
`;

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  padding: 6rem 5%;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const ImageContainer = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ContactContent = styled(motion.div)`
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #fff 0%, #d1d1d1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 3rem;

  p {
    color: #f8f9fa;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: #f8f9fa;
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <PageContainer>
      <ContactSection>
        <ImageContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={contactImage} alt="Get in Touch" />
        </ImageContainer>
        <ContactContent
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get in Touch</h1>
          <ContactInfo>
            <p>
              <a href="mailto:info@elements-creative.com">info@elements-creative.com</a>
            </p>
            <p>00964 771 925 0760</p>
            <p>
              Erbil - English Village<br />
              Ara Apartments, A Building<br />
              Apartment 4
            </p>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input type="text" placeholder="Your name" required />
            </FormGroup>
            <FormGroup>
              <Input type="text" placeholder="Your last name" required />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Your email address" required />
            </FormGroup>
            <FormGroup>
              <TextArea placeholder="Enter your message" required />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactSection>
      <Footer />
    </PageContainer>
  );
};

export default Contact;

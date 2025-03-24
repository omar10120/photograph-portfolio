import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import paidAdsBg from '../images/paid-ads-bg.jpg';
import socialMediaBg from '../images/social-media-bg.jpg';
import elmir from '../images/elmir-restaurant.jpg';
import sabkeh from '../images/sabkeh-restaurant.jpg';

const ClientsContainer = styled.section`
  padding: 6rem 5%;
  background-color: #222;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  font-weight: bold;
  background: linear-gradient(135deg, #fff 0%, #d1d1d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #f8f9fa;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ClientCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  .image-container {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  &:hover .image-container img {
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }

  p {
    color: #f8f9fa;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const clients = [
  {
    id: 1,
    name: 'Elmir Restaurant',
    description: 'Brand identity and food photography',
    image: elmir
  },
  {
    id: 2,
    name: 'Sabkeh Restaurant',
    description: 'Visual branding and menu design',
    image: sabkeh
  },
  {
    id: 3,
    name: 'Elements Marketing',
    description: 'Social media campaign design',
    image: socialMediaBg
  },
  {
    id: 4,
    name: 'Digital Solutions',
    description: 'Digital advertising and branding',
    image: paidAdsBg
  }
];

const ClientsSection = () => {
  return (
    <ClientsContainer>
      <SectionTitle>Our Happy Clients</SectionTitle>
      <SectionDescription>
        We've had the pleasure of working with amazing businesses across various industries.
        Here are some of our valued partners who trust us with their brand.
      </SectionDescription>
      <ClientsGrid>
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: client.id * 0.1 }}
          >
            <div className="image-container">
              <img src={client.image} alt={client.name} />
            </div>
            <h3>{client.name}</h3>
            <p>{client.description}</p>
          </ClientCard>
        ))}
      </ClientsGrid>
    </ClientsContainer>
  );
};

export default ClientsSection;

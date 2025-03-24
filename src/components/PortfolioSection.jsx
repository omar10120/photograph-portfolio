import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import paidAdsBg from '../images/paid-ads-bg.jpg';

const PortfolioContainer = styled.section`
  padding: 6rem 5%;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  font-weight: bold;
  background: linear-gradient(135deg, #fff 0%, #d1d1d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PortfolioItem = styled(motion(Link))`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 3/2;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, 
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem;
    transform: translateY(0);
    transition: transform 0.3s ease;

    h3 {
      color: white;
      font-size: clamp(1.5rem, 3vw, 2rem);
      margin-bottom: 1rem;
      font-weight: bold;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      max-width: 300px;
      line-height: 1.4;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    
    .overlay {
      transform: translateY(-10px);
    }
  }
`;

const portfolioItems = [
  {
    id: 1,
    title: 'Nature Photography',
    category: 'photography',
    description: 'Capturing the beauty of nature',
    image: paidAdsBg,
    link: '/photography'
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'graphic-design',
    description: 'Modern brand design',
    image: paidAdsBg,
    link: '/graphic-design'
  }
];

const PortfolioSection = () => {
  return (
    <PortfolioContainer id="portfolio">
      <SectionTitle>Featured Work</SectionTitle>
      <PortfolioGrid>
        {portfolioItems.map(item => (
          <PortfolioItem
            key={item.id}
            to={item.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioSection;

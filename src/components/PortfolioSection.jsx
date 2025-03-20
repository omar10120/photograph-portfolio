import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PortfolioContainer = styled.section`
  padding: 6rem 5%;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  font-weight: bold;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 3/2;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1rem;

    h3 {
      color: white;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#4a9eff' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#3182ce' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const portfolioItems = [
  {
    id: 1,
    title: 'Nature Photography',
    category: 'photography',
    description: 'Capturing the beauty of nature',
    image: 'https://source.unsplash.com/random/600x400?nature'
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'graphic-design',
    description: 'Modern brand design',
    image: 'https://source.unsplash.com/random/600x400?design'
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'marketing',
    description: 'Engaging social content',
    image: 'https://source.unsplash.com/random/600x400?social'
  },
  {
    id: 4,
    title: 'Product Video',
    category: 'video',
    description: 'Professional product showcase',
    image: 'https://source.unsplash.com/random/600x400?product'
  },
  {
    id: 5,
    title: 'Website Design',
    category: 'web',
    description: 'Modern web experience',
    image: 'https://source.unsplash.com/random/600x400?website'
  },
  {
    id: 6,
    title: 'Marketing Strategy',
    category: 'marketing',
    description: 'Comprehensive marketing plan',
    image: 'https://source.unsplash.com/random/600x400?marketing'
  }
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'photography', 'graphic-design', 'marketing', 'video', 'web'];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <PortfolioContainer id="portfolio">
      <SectionTitle>OUR WORK</SectionTitle>
      <FilterButtons>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterButtons>
      <PortfolioGrid>
        {filteredItems.map(item => (
          <PortfolioItem
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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

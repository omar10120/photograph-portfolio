import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const ClientsContainer = styled.section`
  padding: 6rem 5%;
  background-color: #fff;
  color: #1a1a1a;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #333;
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
`;

const SliderWindow = styled.div`
  overflow: hidden;
  margin: 2rem 0;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 2rem 0;
`;

const ClientLogo = styled(motion.div)`
  flex: 0 0 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%) brightness(0.7);
    opacity: 0.7;
    transition: all 0.5s ease;
  }

  &:hover img {
    filter: grayscale(0%) brightness(1);
    opacity: 1;
    transform: scale(1.05);
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.1);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

const clients = [
  {
    id: 1,
    name: 'Damascuino',
    logo: '/images/clients/damascuino.png'
  },
  {
    id: 2,
    name: 'Naranj',
    logo: '/images/clients/naranj.png'
  },
  {
    id: 3,
    name: 'Sweet Taste',
    logo: '/images/clients/sweet-taste.png'
  },
  {
    id: 4,
    name: 'Prego',
    logo: '/images/clients/prego.png'
  },
  {
    id: 5,
    name: 'Avenue',
    logo: '/images/clients/avenue.png'
  }
];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const visibleSlides = 3;
  const totalSlides = Math.ceil(clients.length / visibleSlides);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  }, [nextSlide]);

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleClients = () => {
    const start = currentIndex * visibleSlides;
    const visibleItems = [...clients.slice(start), ...clients.slice(0, start)].slice(0, visibleSlides);
    return visibleItems;
  };

  return (
    <ClientsContainer id="clients">
      <SectionTitle>Our Happy Clients</SectionTitle>
      <SliderContainer>
        <SliderButton className="prev" onClick={prevSlide} aria-label="Previous">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </SliderButton>
        <SliderWindow>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <SliderTrack
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {getVisibleClients().map((client) => (
                <ClientLogo
                  key={client.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={client.logo} alt={client.name} />
                </ClientLogo>
              ))}
            </SliderTrack>
          </AnimatePresence>
        </SliderWindow>
        <SliderButton className="next" onClick={nextSlide} aria-label="Next">
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </SliderButton>
      </SliderContainer>
    </ClientsContainer>
  );
};

export default ClientsSection;

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  scroll-behavior: smooth;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/images/hero-bg.jpg') center/cover no-repeat fixed;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(transparent, #1a1a1a);
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  background: linear-gradient(135deg, #fff 0%, #d1d1d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  color: #f8f9fa;
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: #007bff;
  color: white;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,123,255,0.3);

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,123,255,0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 6rem 5%;
  position: relative;
  overflow: hidden;

  &:nth-of-type(even) {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  color: #f8f9fa;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  ${props => props.$type === 'food' && `
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}

  ${props => props.$type === 'luxury' && `
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}

  ${props => props.$type === 'car' && `
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  `}
`;

const PhotoItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  background: #2a2a2a;
  aspect-ratio: ${props => props.$type === 'car' ? '16/9' : '1'};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, 
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.05);
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Photography = () => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Handle URL hash on page load
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  const handleScrollToFood = () => {
    const foodSection = document.getElementById('food');
    if (foodSection) {
      foodSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const sections = [
    {
      id: 'food',
      title: 'Food Photography',
      description: 'Make your mouth water with mouthwatering close-ups, creative compositions, and delicious visuals that showcase the quality and artistry of your culinary creations.',
      images: [
        { 
          src: '/images/food/fried-chicken.jpg', 
          alt: 'Crispy fried chicken with potato wedges' 
        },
        { 
          src: '/images/food/shawarma.jpg', 
          alt: 'Shawarma wrap on wooden board' 
        },
        { 
          src: '/images/food/seafood.jpg', 
          alt: 'Seafood platter arrangement' 
        },
        { 
          src: '/images/food/salad.jpg', 
          alt: 'Fresh salad with radish garnish' 
        }
      ]
    },
    {
      id: 'luxury',
      title: 'Luxury Photography',
      description: 'Elevate your brand image with sophisticated product photography that highlights the intricate details and craftsmanship of your luxury items, like watches and glasses.',
      images: [
        { 
          src: '/images/luxury/watch1.jpg', 
          alt: 'Luxury timepiece on dark background' 
        },
        { 
          src: '/images/luxury/sunglasses.jpg', 
          alt: 'Ray-Ban aviator sunglasses with case' 
        },
        { 
          src: '/images/luxury/watch2.jpg', 
          alt: 'Premium watch detail shot' 
        },
        { 
          src: '/images/luxury/accessories.jpg', 
          alt: 'Luxury accessories collection' 
        }
      ]
    },
    {
      id: 'car',
      title: 'Car Photography',
      description: "Showcase automobiles' power, beauty, and elegance with dynamic and detailed car photography that ignites passion and desire.",
      images: [
        { 
          src: '/images/cars/mercedes.jpg', 
          alt: 'Mercedes-Benz with fashion model' 
        },
        { 
          src: '/images/cars/chevrolet.jpg', 
          alt: 'Chevrolet SUV in urban setting' 
        }
      ]
    }
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.div variants={itemVariants}>
            <Title>Capture your memories with stunning photography services</Title>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Description>
              Capture the essence of your brand and captivate your audience with stunning visuals crafted by our expert photographers.
            </Description>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ContactButton to="/contact">Contact Us</ContactButton>
          </motion.div>
        </HeroContent>
        <ScrollIndicator
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={handleScrollToFood}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5"/>
            <path d="M7 6l5 5 5-5"/>
          </svg>
          <ScrollText>Explore Our Work</ScrollText>
        </ScrollIndicator>
      </HeroSection>

      {sections.map((section) => (
        <Section key={section.id} id={section.id}>
          <SectionHeader>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionDescription>{section.description}</SectionDescription>
          </SectionHeader>
          <PhotoGrid $type={section.id}>
            {section.images.map((image, index) => (
              <PhotoItem
                key={index}
                $type={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  draggable="false"
                />
              </PhotoItem>
            ))}
          </PhotoGrid>
        </Section>
      ))}
    </PageContainer>
  );
};

export default Photography;

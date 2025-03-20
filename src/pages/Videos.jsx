import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  margin-top: -80px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
              url('/images/camera-bg.jpg') center/cover no-repeat fixed;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(transparent, #1a1a1a);
    pointer-events: none;
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

const ContactButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
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

  &:nth-of-type(even) {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: ${props => props.$iscinematic ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  }
`;

const PlayButton = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);

  svg {
    width: 64px;
    height: 64px;
    fill: white;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }
`;

const VideoTitle = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  color: white;
  z-index: 2;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);
`;

const VideoCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
  background: #2a2a2a;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    &::before {
      opacity: 1;
    }

    ${PlayButton} {
      opacity: 1;
      transform: scale(1.1);
    }

    ${VideoTitle} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, 
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const sections = [
    {
      id: 'lifestyle',
      title: 'Lifestyle Videos',
      description: 'Showcase the human connection and real-life experiences behind your brand. Perfect for product demonstrations, customer testimonials, or aspirational storytelling.',
      videos: [
        {
          id: 'mango-fashion',
          title: 'Mango Fashion',
          thumbnail: '/images/luxury/watch1.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
          id: 'vergnano-life',
          title: 'Vergnano Life',
          thumbnail: '/images/luxury/watch2.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
          id: 'papparoti',
          title: 'Papparoti Awrin',
          thumbnail: '/images/luxury/watch3.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        }
      ]
    },
    {
      id: 'cinematic',
      title: 'Cinematic Videos',
      description: 'Create a truly immersive experience with stunning visuals, emotional storytelling, and high production value. Perfect for brand films, corporate overviews, or high-end product showcases.',
      videos: [
        {
          id: 'swedish-hospital',
          title: 'Swedish Hospital Zama',
          thumbnail: '/images/food/food1.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
          id: 'vergnano-takeaway',
          title: 'Vergnano Take Away',
          thumbnail: '/images/food/food2.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        }
      ]
    },
    {
      id: 'reels',
      title: 'Stunning Reels',
      description: 'Capture the essence of your brand in short, engaging video snippets perfect for social media. Ideal for Instagram Reels, TikTok, or creating a dynamic video presence.',
      videos: [
        {
          id: 'can-unlock',
          title: 'Can Unlock',
          thumbnail: '/images/cars/car1.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
          id: 'unboxing',
          title: 'Unboxing Watch',
          thumbnail: '/images/cars/car2.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
          id: 'barber',
          title: 'Barber Shop',
          thumbnail: '/images/cars/car3.jpg',
          embedUrl: 'https://www.youtube.com/embed/your-video-id'
        }
      ]
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Transform Your Experiences Into Cinematic Masterpieces</Title>
          <Description>
            Elements offers a comprehensive range of video production services designed to engage your audience and achieve your marketing goals. From high-impact promo videos to stunning social media reels, we craft videos that resonate and leave a lasting impression. Let's explore how we can bring your vision to life!
          </Description>
          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </ContactButton>
        </HeroContent>
      </HeroSection>

      {sections.map((section) => (
        <Section key={section.id} id={section.id}>
          <SectionTitle>{section.title}</SectionTitle>
          <SectionDescription>{section.description}</SectionDescription>
          <VideoGrid $iscinematic={section.id === 'cinematic'}>
            {section.videos.map((video, index) => (
              <VideoCard
                key={video.id}
                onClick={() => setSelectedVideo(video)}
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
                  src={video.thumbnail} 
                  alt={video.title}
                  loading="lazy"
                  draggable="false"
                />
                <PlayButton>
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </PlayButton>
                <VideoTitle>{video.title}</VideoTitle>
              </VideoCard>
            ))}
          </VideoGrid>
        </Section>
      ))}

      {selectedVideo && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <CloseButton onClick={() => setSelectedVideo(null)}>×</CloseButton>
          <ModalContent
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo.embedUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
};

export default Videos;

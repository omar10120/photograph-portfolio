import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 1001;
  padding: 0.5rem;
  margin-right: 2rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  img {
    height: 45px;
    width: auto;
    display: block;
    opacity: 1;
    filter: brightness(1.1);
  }

  @media (max-width: 1024px) {
    img {
      height: 40px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(10px);
  padding: 2rem;
  flex-direction: column;
  gap: 1.5rem;
  transform: translateY(-150%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 1024px) {
    display: flex;
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transform: translateY(${props => props.$isOpen ? '0' : '-150%'});
  }

  a {
    color: #f8f9fa;
    text-decoration: none;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);
    padding: 0.8rem 0;
    text-align: center;
    
    &:hover {
      color: #007bff;
      transform: translateY(-1px);
    }

    &.active {
      color: #007bff;
    }

    &:last-child {
      margin-top: 0.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const DesktopNavLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  padding: 0.5rem 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #007bff;
    
    &:after {
      width: 100%;
      background: #007bff;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #f8f9fa;
    transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  &.active {
    color: #007bff;
    
    &:after {
      width: 100%;
      background: #007bff;
    }
  }

  &:last-child {
    font-weight: 500;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #f8f9fa;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);

  @media (max-width: 1024px) {
    display: block;
  }

  svg {
    width: 28px;
    height: 28px;
    transition: transform 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }

  &:hover {
    color: #007bff;
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f8f9fa;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: 0.8;
  transition: opacity 0.3s cubic-bezier(0.43, 0.13, 0.23, 0.96);

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        <img src="/images/logo.svg" alt="Elements Creative" />
      </Logo>
      <NavLinks>
        <DesktopNavLink to="/" className={isActive('/')}>Home</DesktopNavLink>
        <DesktopNavLink to="/photography" className={isActive('/photography')}>Photography</DesktopNavLink>
        <DesktopNavLink to="/videos" className={isActive('/videos')}>Videos</DesktopNavLink>
        <DesktopNavLink to="/graphic-design" className={isActive('/graphic-design')}>Graphic Design</DesktopNavLink>
        <DesktopNavLink to="/social-media" className={isActive('/social-media')}>Social Media Marketing</DesktopNavLink>
        <DesktopNavLink to="/paid-ads" className={isActive('/paid-ads')}>Paid ads</DesktopNavLink>
        <DesktopNavLink to="/contact" className={isActive('/contact')}>Contact</DesktopNavLink>
      </NavLinks>
      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        )}
      </MenuButton>
      <MobileNavLinks $isOpen={isMenuOpen}>
        <Link to="/" className={isActive('/')} onClick={toggleMenu}>Home</Link>
        <Link to="/photography" className={isActive('/photography')} onClick={toggleMenu}>Photography</Link>
        <Link to="/videos" className={isActive('/videos')} onClick={toggleMenu}>Videos</Link>
        <Link to="/graphic-design" className={isActive('/graphic-design')} onClick={toggleMenu}>Graphic Design</Link>
        <Link to="/social-media" className={isActive('/social-media')} onClick={toggleMenu}>Social Media Marketing</Link>
        <Link to="/paid-ads" className={isActive('/paid-ads')} onClick={toggleMenu}>Paid ads</Link>
        <Link to="/contact" className={isActive('/contact')} onClick={toggleMenu}>Contact</Link>
      </MobileNavLinks>
      <LanguageSelector>
        {/* EN ▼ */}
      </LanguageSelector>
    </Nav>
  );
};

export default Navbar;

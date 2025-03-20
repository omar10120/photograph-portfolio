import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled(Link)`
  img {
    height: 50px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;
    padding: 0.5rem 0;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: #fff;
      &:after {
        width: 100%;
      }
    }

    &.active {
      color: #fff;
      &:after {
        width: 100%;
      }
    }
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Nav>
      <Logo to="/">
        <img src="/images/logo.svg" alt="Logo" />
      </Logo>
      <NavLinks>
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/photography" className={isActive('/photography')}>Photography</Link>
        <Link to="/videos" className={isActive('/videos')}>Videos</Link>
        <Link to="/graphic-design" className={isActive('/graphic-design')}>Graphic Design</Link>
        <Link to="/social-media" className={isActive('/social-media')}>Social Media Marketing</Link>
        <Link to="/paid-ads" className={isActive('/paid-ads')}>Paid ads</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </NavLinks>
      <LanguageSelector>
        EN ▼
      </LanguageSelector>
    </Nav>
  );
};

export default Navbar;

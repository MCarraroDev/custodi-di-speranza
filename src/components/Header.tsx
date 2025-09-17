import { useState } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { navLinks } from '../data/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import pavoniLogo from '../assets/logo/pavoni.png';

// Main header container
const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.background.dark};
  padding: 0 40px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
  z-index: 100; // Ensure header is above other content
`;

// Logo container that links to the homepage
const LogoContainer = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 15px; // Space between logo and text
  z-index: 110; // Ensure logo is above mobile menu when it's open
`;

const LogoImage = styled.img`
  height: 45px; // Adjust size as needed
  width: auto;
`;

const LogoText = styled.span`
  color: ${(props) => props.theme.colors.text.light};
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
`;

// Container for desktop navigation links
const NavLinksContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none; // Hide on mobile
  }
`;

// Styling for individual navigation links
const NavLink = styled(RouterNavLink)`
  color: ${(props) => props.theme.colors.text.light};
  text-decoration: none;
  margin: 0 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.primary};
    &::after {
      transform: scaleX(1);
    }
  }

  // Styles for links inside the mobile menu
  @media (max-width: 1200px) {
    margin: 20px 0;
    font-size: 1.8rem;
  }
`;

// Anchor styled the same as NavLink for external links
const ExternalAnchor = styled.a`
  color: ${(props) => props.theme.colors.text.light};
  text-decoration: none;
  margin: 0 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 1200px) {
    margin: 20px 0;
    font-size: 1.8rem;
  }
`;

// Hamburger and close icon for mobile menu
const HamburgerIcon = styled.div`
  display: none; // Hidden by default on desktop
  color: ${(props) => props.theme.colors.text.light};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 110;

  @media (max-width: 1200px) {
    display: flex; // Visible and centered on mobile
    align-items: center;
  }
`;

// Full-screen mobile menu container
const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.98); // Slightly transparent background
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 105;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      <LogoContainer to="/" onClick={() => setMenuOpen(false)}>
        <LogoImage src={pavoniLogo} alt="Logo Istituto Pavoni" />
        <LogoText>Il Mio Purgatorio</LogoText>
      </LogoContainer>

      {/* Desktop Navigation */}
      <NavLinksContainer>
        {navLinks.map((link) => (
          link.path.startsWith('http') ? (
            <ExternalAnchor key={link.path} href={link.path} target="_blank" rel="noopener noreferrer">
              {link.label}
            </ExternalAnchor>
          ) : (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          )
        ))}
      </NavLinksContainer>

      {/* Mobile Navigation Icon */}
      <HamburgerIcon onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>

      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={isMenuOpen}>
        {navLinks.map((link) => (
          link.path.startsWith('http') ? (
            <ExternalAnchor key={link.path} href={link.path} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              {link.label}
            </ExternalAnchor>
          ) : (
            <NavLink key={link.path} to={link.path} onClick={toggleMenu}>
              {link.label}
            </NavLink>
          )
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { buttonStyles } from '../../styles/shared';

const Button = styled.button<{ isVisible: boolean }>`
  ${buttonStyles}
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 15px; 
  border-radius: 50%; 
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease; 

  // L'hover è già gestito da buttonStyles, ma possiamo aggiungere o sovrascrivere se necessario
`;

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<Button
			onClick={scrollToTop}
			isVisible={isVisible}
			aria-label='Torna su'
		>
			<FaArrowUp />
		</Button>
	);
};

export default ScrollToTopButton;

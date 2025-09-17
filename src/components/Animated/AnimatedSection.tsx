import styled, { keyframes, css } from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import React from 'react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section<{ isVisible: boolean }>`
	padding: 60px 20px;
	max-width: 960px;
	margin: 0 auto;
	text-align: center;
	opacity: 0;

	${({ isVisible }) =>
		isVisible &&
		css`
			animation: ${fadeInUp} 0.8s ease-out forwards;
		`}
`;

interface AnimatedSectionProps {
	children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
	className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	className,
}) => {
	const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

	return (
		<Section
			ref={ref}
			isVisible={isVisible}
			className={className}
		>
			{typeof children === 'function' ? children(isVisible) : children}
		</Section>
	);
};

export default AnimatedSection;

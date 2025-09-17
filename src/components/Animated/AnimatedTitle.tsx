import styled, { css } from 'styled-components';
import React from 'react';

const Title = styled.h2<{ isVisible: boolean }>`
	font-size: 2.5rem;
	margin-bottom: 40px;
	font-family: 'Playfair Display', serif;
	color: ${(props) => props.theme.colors.text.dark};
	position: relative;
	display: inline-block;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: ${(props) => props.theme.colors.primary};
		bottom: -10px;
		left: 0;
		transform: scaleX(0);
		transform-origin: center;
		transition: transform 1s ease-out;
	}

	${({ isVisible }) =>
		isVisible &&
		css`
			&::after {
				transform: scaleX(1);
			}
		`}
`;

interface AnimatedTitleProps {
	children: React.ReactNode;
	className?: string;
	isVisible: boolean;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
	children,
	className,
	isVisible,
}) => {
	return (
		<Title
			className={className}
			isVisible={isVisible}
		>
			{children}
		</Title>
	);
};

export default AnimatedTitle;

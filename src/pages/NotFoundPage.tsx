import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 250px); // Altezza della viewport meno header e footer
	text-align: center;
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 6rem;
	color: ${(props) => props.theme.colors.primary};
	margin: 0;
	font-family: ${(props) => props.theme.fonts.title};
`;

const Subtitle = styled.p`
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.text.dark};
	margin: 10px 0 30px;
`;

const HomeButton = styled(Link)`
	padding: 12px 25px;
	font-size: 1rem;
	color: ${(props) => props.theme.colors.text.light};
	background-color: ${(props) => props.theme.colors.background.dark};
	border: none;
	text-decoration: none;
	cursor: pointer;
	transition:
		background-color 0.3s ease,
		transform 0.2s ease;

	&:hover {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.background.dark};
		transform: scale(1.05);
	}
`;

const NotFoundPage: React.FC = () => {
	return (
		<NotFoundContainer>
			<Title>404</Title>
			<Subtitle>La dritta via hai smarrito</Subtitle>
			<p>La pagina che stai cercando non esiste o è stata spostata.</p>
			<HomeButton to='/'>Torna alla Home</HomeButton>
		</NotFoundContainer>
	);
};

export default NotFoundPage;

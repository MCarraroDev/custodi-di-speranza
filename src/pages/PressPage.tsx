import styled from 'styled-components';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import { FaExternalLinkAlt, FaNewspaper, FaCalendarAlt, FaTimes, FaImage } from 'react-icons/fa';

const IntroSection = styled(AnimatedSection)`
	padding-bottom: 0px;
`;

const ArticlesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 30px;
	margin-top: 20px;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	justify-items: center;
`;

const ArticleCard = styled.div<{ $isClickable: boolean }>`
	background: white;
	border-radius: 12px;
	padding: 30px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	text-decoration: none;
	color: inherit;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border: 2px solid transparent;
	cursor: ${({ $isClickable }) => $isClickable ? 'pointer' : 'default'};

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 24px rgba(0, 145, 62, 0.2);
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

const ArticleTitle = styled.h3`
	font-size: 1.4rem;
	line-height: 1.4;
	color: ${({ theme }) => theme.colors.text.dark};
	font-family: ${({ theme }) => theme.fonts.title};
	margin: 0;
`;

const ArticleMeta = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-size: 0.95rem;
	color: ${({ theme }) => theme.colors.text.dark};
	opacity: 0.8;
`;

const MetaItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const MetaIcon = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
`;

const ReadMoreButton = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: 600;
	margin-top: auto;
	font-size: 0.95rem;
`;

const Modal = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
	z-index: 1000;
	padding: 20px;
`;

const ModalContent = styled.div`
	position: relative;
	max-width: 90%;
	max-height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalImage = styled.img`
	max-width: 100%;
	max-height: 90vh;
	object-fit: contain;
	border-radius: 8px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
	position: absolute;
	top: -15px;
	right: -15px;
	background: ${({ theme }) => theme.colors.primary};
	color: white;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: 1.2rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

	&:hover {
		background: #007030;
		transform: scale(1.1);
	}
`;

const PressPage = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const articles = [
		{
			title: 'All\'istituto Paolo VI - Istituto Pavoni, al via da sabato una mostra su Dante profeta di speranza nel Purgatorio ',
			source: 'Avvenire',
			date: '9 Ottobre 2025',
			url: 'https://files.catbox.moe/n7d0t6.png'
		},
		{
			title: 'All\'Istituto Pavoni di Tradate "Il mio Purgatorio", una mostra per riscoprire la speranza attraverso Dante',
			source: 'VareseNews',
			date: '7 Ottobre 2025',
			url: 'https://www.varesenews.it/2025/10/allistituto-pavoni-di-tradate-il-mio-purgatorio-una-mostra-per-riscoprire-la-speranza-attraverso-dante/'
		}
	];

	const isCatboxUrl = (url: string) => url.includes('catbox');

	const handleArticleClick = (article: typeof articles[0]) => {
		if (isCatboxUrl(article.url)) {
			setSelectedImage(article.url);
		} else {
			window.open(article.url, '_blank', 'noopener,noreferrer');
		}
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<div>
			<HeroSection
				title={pages.press.title}
				subtitle={pages.press.subtitle}
				imageUrl={pages.press.imageUrl}
				imageAlt={pages.press.imageAlt}
				imageCredits={pages.press.imageCredits}
			/>
			<IntroSection>
				<TextBlock>
					In questa sezione raccogliamo le voci di chi ha parlato del nostro
					progetto. Articoli di giornale, recensioni online, e testimonianze di
					chi ha partecipato ai nostri eventi. Siamo orgogliosi dell'interesse
					che "Il Mio Purgatorio" sta suscitando e grati per ogni parola che
					aiuta a diffondere il nostro messaggio di speranza. Leggi cosa dicono
					di noi e lasciati ispirare.
				</TextBlock>
			</IntroSection>
			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>Articoli e Recensioni</AnimatedTitle>
						<ArticlesContainer>
						{articles.map((article, index) => (
							<ArticleCard 
								key={index}
								$isClickable={true}
								onClick={() => handleArticleClick(article)}
							>
								<ArticleTitle>{article.title}</ArticleTitle>
								<ArticleMeta>
									<MetaItem>
										<MetaIcon><FaNewspaper /></MetaIcon>
										<span>{article.source}</span>
									</MetaItem>
									<MetaItem>
										<MetaIcon><FaCalendarAlt /></MetaIcon>
										<span>{article.date}</span>
									</MetaItem>
								</ArticleMeta>
								<ReadMoreButton>
									{isCatboxUrl(article.url) ? (
										<>Visualizza immagine <FaImage size={14} /></>
									) : (
										<>Leggi l'articolo <FaExternalLinkAlt size={14} /></>
									)}
								</ReadMoreButton>
							</ArticleCard>
						))}
					</ArticlesContainer>
					</>
				)}
		</AnimatedSection>

		<Modal $isOpen={selectedImage !== null} onClick={closeModal}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				{selectedImage && <ModalImage src={selectedImage} alt="Articolo" />}
				<CloseButton onClick={closeModal}>
					<FaTimes />
				</CloseButton>
			</ModalContent>
		</Modal>
	</div>
	);
};

export default PressPage;

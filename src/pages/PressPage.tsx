import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import { FaExternalLinkAlt, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';

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

const ArticleCard = styled.a`
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

const PressPage = () => {
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
									href={article.url}
									target="_blank"
									rel="noopener noreferrer"
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
										Leggi l'articolo <FaExternalLinkAlt size={14} />
									</ReadMoreButton>
								</ArticleCard>
							))}
						</ArticlesContainer>
					</>
				)}
			</AnimatedSection>
		</div>
	);
};

export default PressPage;

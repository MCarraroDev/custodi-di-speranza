import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import { Link } from 'react-router-dom';
import { buttonStyles } from '../styles/shared';
import styled from 'styled-components';

import centocanti from '../assets/logo/official/centocanti.png';
import chiesaverona from '../assets/logo/official/LOGO_CHIESA_VERONA-verticale.png';
import rivela from '../assets/logo/official/LOGO_RIVELA-removebg-preview.png';

const PrenotaButton = styled.a`
	${buttonStyles}
`;

const HomePage = () => {
	return (
		<div>
			<HeroSection
				title={pages.home.title}
				subtitle={pages.home.subtitle}
				imageUrl={pages.home.imageUrl}
				imageAlt={pages.home.imageAlt}
				imageCredits={pages.home.imageCredits}
			/>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>
							Il Mio Purgatorio - Dante profeta di Speranza
						</AnimatedTitle>
						<TextBlock>
							L’ Istituto Pavoni, nell’anno giubilare, sceglie di ospitare la
							mostra itinerante Il mio Purgatorio - Dante profeta di{' '}
							<b>Speranza </b>
							dall’11 al 26 ottobre 2025.<br></br>La mostra è un racconto visivo
							e narrativo del viaggio di Dante sul monte del Purgatorio: sette
							balze per ritrovare sé stessi, per scoprire che nulla è perduto,
							che la misericordia ha sempre l’ultima parola. Questa risalita
							dell’anima è guidata dalle immagini potenti di Gabriele Dell’Otto
							e dalla voce sapiente del professor Franco Nembrini. A condurvi,
							saranno gli occhi e il cuore dei nostri ragazzi, testimoni
							appassionati di una <b>bellezza</b> che parla al presente.
							<br></br>Prodotta da Rivela, Centocanti e Chiesa di Verona, la
							mostra è un invito a credere che l’arte e la cultura possano
							ancora accendere <b>Speranza</b>.
						</TextBlock>
					</>
				)}
			</AnimatedSection>
			{/* Sponsor */}
			<AnimatedSection>
				{() => (
					<>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '1rem',
								margin: '-6rem 0',
							}}
						>
							<Link to="https://www.franconembrini.it/centocanti/" target="_blank" rel="noopener noreferrer">
								<img
									src={centocanti}
									alt='Centocanti'
									className="sponsor-logo"
									style={{ height: '100px', width: 'auto' }}
								/>
							</Link>
							<Link to="https://www.chiesadiverona.it/" target="_blank" rel="noopener noreferrer">
								<img
									src={chiesaverona}
									alt='Chiesa Verona'
									className="sponsor-logo"
									style={{ height: '100px', width: 'auto' }}
								/>
							</Link>
							<Link to="https://www.rivela.org/" target="_blank" rel="noopener noreferrer">
								<img
									src={rivela}
									alt='Rivela'
									className="sponsor-logo"
									style={{ height: '100px', width: 'auto' }}
								/>
							</Link>
						</div>
					</>
				)}
			</AnimatedSection>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>
							Informazioni e Prenotazioni
						</AnimatedTitle>
						<TextBlock>
							Dall’11 al 26 ottobre - Auditorium Istituto Pavoni - Tradate (Va)
							<br />
							Ingresso gratuito.
							<br />
							Prenotazioni da fine settembre.
						</TextBlock>
						<br></br>
						<PrenotaButton
							href="https://example.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Prenota ora
						</PrenotaButton>
					</>
				)}
			</AnimatedSection>
		</div>
	);
};

export default HomePage;

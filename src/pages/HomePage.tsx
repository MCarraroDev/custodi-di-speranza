import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import centocanti from '../assets/logo/ufficial/centocanti.png';
import chiesaverona from '../assets/logo/ufficial/LOGO_CHIESA_VERONA-verticale.png';
import rivela from '../assets/logo/ufficial/LOGO_RIVELA-removebg-preview.png';

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
			{/* New sponsor logos section inserted below 'Il Mio Purgatorio - Dante profeta di Speranza' */}
			<AnimatedSection>
				{(isVisible) => (
					<>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '1rem',
								margin: '1rem 0',
							}}
						>
							<img
								src={centocanti}
								alt='Centocanti'
								style={{ maxWidth: '100px' }}
							/>
							<img
								src={chiesaverona}
								alt='Chiesa Verona'
								style={{ maxWidth: '100px' }}
							/>
							<img
								src={rivela}
								alt='Rivela'
								style={{ maxWidth: '100px' }}
							/>
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
						<a
							href='https://example.com'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								display: 'inline-block',
								marginTop: '1rem',
								padding: '0.5rem 1rem',
								backgroundColor: '#007bff',
								color: '#fff',
								borderRadius: '4px',
								textDecoration: 'none',
							}}
						>
							Scopri di più
						</a>
					</>
				)}
			</AnimatedSection>
		</div>
	);
};

export default HomePage;

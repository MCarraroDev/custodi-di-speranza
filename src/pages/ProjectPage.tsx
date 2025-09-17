import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import Masonry from '../components/Masonry/Masonry';
import { masonryImages } from '../data/masonryImages.ts'; 

const ProjectPage = () => {
	return (
		<div>
			<HeroSection
				title={pages.project.title}
				subtitle={pages.project.subtitle}
				imageUrl={pages.project.imageUrl}
				imageAlt={pages.project.imageAlt}
				imageCredits={pages.project.imageCredits}
			/>
			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>
							Un Gesto di Gratitudine e Responsabilità
						</AnimatedTitle>
						<TextBlock>
							Nell’Anno Giubilare dedicato alla Speranza, la scuola media Paolo
							VI- Istituto Pavoni ha scelto di ospitare la mostra "Il mio
							Purgatorio. Dante profeta di speranza" come gesto di gratitudine e
							responsabilità educativa. Abbiamo riconosciuto in questa mostra
							un’occasione unica di crescita per i nostri studenti e per tutta
							la comunità. Tra le tre cantiche della Divina Commedia, il
							Purgatorio è quella che più somiglia alla nostra vita quotidiana:
							un cammino non privo di ostacoli, ma attraversato dal desiderio di
							ricominciare, di non restare schiacciati dal male o dal passato.
						</TextBlock>
					</>
				)}
			</AnimatedSection>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>
							Il Purgatorio: Un Cammino per Ricominciare
						</AnimatedTitle>
						<TextBlock>
							Il cuore del Purgatorio è la misericordia, la pazienza di Dio che
							dà tempo all’uomo perché possa rinascere. È la cantica della
							libertà possibile, del tempo che diventa occasione di cambiamento,
							del presente che torna ad avere valore. È la risposta alla domanda
							che ci abita tutti: possiamo davvero ricominciare?
						</TextBlock>
					</>
				)}
			</AnimatedSection>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>
							Un'Esperienza per i Nostri Ragazzi
						</AnimatedTitle>
						<TextBlock>
							Questa mostra vuole essere un dono formativo per i nostri ragazzi:
							un’esperienza viva che non si limita alla conoscenza di un testo,
							ma apre alla scoperta di sé e alla domanda di senso. Per questo
							saranno proprio i nostri ragazzi/le nostre ragazze ad accompagnare
							i visitatori come guide, protagonisti di un percorso che parla
							anche al loro presente.
						</TextBlock>
						<TextBlock>
							Ma la mostra non si rivolge solo a chi vive la scuola: è un invito
							al territorio, alle famiglie, ai curiosi, ai cercatori di
							Bellezza e ai custodi di Speranza. Perché la cultura, quando è vera, non è mai riservata a
							pochi: è sempre un'apertura, una proposta, una possibilità per
							tutti.
						</TextBlock>
						<div style={{
							position: 'relative',
							width: '100%',
							overflow: 'visible',
							margin: '20px 0 10px',
							padding: 0,
							zIndex: 1,
							background: 'transparent',
						}}>
							<div style={{
								position: 'relative',
								width: '100%',
								maxWidth: '1200px',
								margin: '0 auto',
								padding: '0 20px',
							}}>
								<Masonry
									items={masonryImages}
									animateFrom="bottom"
									duration={0.8}
									stagger={0.05}
									scaleOnHover={true}
									hoverScale={0.95}
									colorShiftOnHover={true}
								/>
							</div>
						</div>
					</>
				)}
			</AnimatedSection>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>
							Un Invito Aperto a Tutti
						</AnimatedTitle>
						<TextBlock>
							In un tempo in cui spesso si fatica a credere che qualcosa di
							nuovo possa accadere, <i>Il Mio Purgatorio</i> ci ricorda che la
							speranza non è un’illusione, ma una forza viva, un cammino reale
							che può riaccendersi anche nelle pieghe più oscure della nostra
							storia personale e collettiva.
						</TextBlock>
						<TextBlock>
							Per questo, nel cuore dell’Anno Giubilare, apriamo le porte della
							nostra scuola non solo ai nostri ragazzi, ma a tutti. Perché la
							speranza si impara camminando, guardando, lasciandosi toccare
							dalla Bellezza. E perché in un tempo segnato da inquietudini e
							fratture, crediamo che ogni gesto capace di generare speranza sia
							già, in sé, una forma di rinascita.
						</TextBlock>
						<TextBlock>
							È il nostro modo, semplice ma deciso, di vivere il Giubileo: non
							come celebrazione, ma come atto di fiducia. Fiducia che l’uomo
							possa cambiare. Che il Bene possa ancora sorprenderci. Che
							l’educazione è davvero, come diceva Dante, il luogo dove imparare
							a diventare liberi.
						</TextBlock>
					</>
				)}
			</AnimatedSection>
		</div>
	);
};

export default ProjectPage;

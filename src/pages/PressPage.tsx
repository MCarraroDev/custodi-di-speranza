import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';

const PressPage = () => {
	return (
		<div>
			<HeroSection
				title={pages.press.title}
				subtitle={pages.press.subtitle}
				imageUrl={pages.press.imageUrl}
				imageAlt={pages.press.imageAlt}
				imageCredits={pages.press.imageCredits}
			/>
			<AnimatedSection>
				<TextBlock>
					In questa sezione raccogliamo le voci di chi ha parlato del nostro
					progetto. Articoli di giornale, recensioni online, e testimonianze di
					chi ha partecipato ai nostri eventi. Siamo orgogliosi dell'interesse
					che "Il Mio Purgatorio" sta suscitando e grati per ogni parola che
					aiuta a diffondere il nostro messaggio di speranza. Leggi cosa dicono
					di noi e lasciati ispirare.
				</TextBlock>
			</AnimatedSection>
		</div>
	);
};

export default PressPage;

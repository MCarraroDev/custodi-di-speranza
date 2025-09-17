import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import { pages } from '../data/pageData';
import AnimatedSection from '../components/Animated/AnimatedSection';
import TextBlock from '../components/common/TextBlock';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import { FaBullhorn, FaUsers, FaHandshake } from 'react-icons/fa';

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
`;

const BenefitIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin-right: 20px;
  margin-top: 5px; 
`;

const SponsorPage = () => {
	return (
		<div>
			<HeroSection
				title={pages.sponsor.title}
				subtitle={pages.sponsor.subtitle}
				imageUrl={pages.sponsor.imageUrl}
				imageAlt={pages.sponsor.imageAlt}
				imageCredits={pages.sponsor.imageCredits}
			/>
			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>Sostieni la Cultura, Accendi la Speranza</AnimatedTitle>
						<TextBlock>
							La mostra "Il mio Purgatorio. Dante profeta di speranza" sarà ampiamente promossa attraverso canali stampa, digitali e materiali pubblicitari. Crediamo che iniziative come questa meritino sostegno, perché parlano ai cuori, educano alla Bellezza e aprono spazi di riflessione autentica.
						</TextBlock>
						<TextBlock>
							È possibile affiancarci in questa avventura diventando sponsor o sostenitori del progetto, usufruendo delle agevolazioni fiscali previste dalla normativa vigente.
						</TextBlock>
					</>
				)}
			</AnimatedSection>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>Cosa Offriamo ai Nostri Sponsor</AnimatedTitle>
						<BenefitsList>
							<BenefitItem>
								<BenefitIcon><FaBullhorn /></BenefitIcon>
								<span>
									<strong>Visibilità del logo:</strong> in tutti i materiali di comunicazione: manifesti, inviti, cartella stampa, comunicati e pubblicità su media locali.
								</span>
							</BenefitItem>
							<BenefitItem>
								<BenefitIcon><FaUsers /></BenefitIcon>
								<span>
									<strong>Visite guidate esclusive:</strong> possibilità di richiedere una o più visite guidate per i propri dipendenti, collaboratori o clienti.
								</span>
							</BenefitItem>
							<BenefitItem>
								<BenefitIcon><FaHandshake /></BenefitIcon>
								<span>
									<strong>Associazione di valore:</strong> opportunità di associare il proprio nome a un progetto culturale che coinvolge i giovani e promuove valori di crescita, responsabilità e speranza.
								</span>
							</BenefitItem>
						</BenefitsList>
					</>
				)}
			</AnimatedSection>

			<AnimatedSection>
				{(isVisible) => (
					<>
						<AnimatedTitle isVisible={isVisible}>Un Cammino Condiviso</AnimatedTitle>
						<TextBlock>
							L’ingresso alla mostra e le visite guidate saranno gratuite per tutti, ma il vostro contributo sarà essenziale per rendere possibile questo cammino condiviso.
						</TextBlock>
						<TextBlock>
							Per maggiori informazioni o per manifestare il vostro interesse, vi invitiamo a contattare la segreteria amministrativa della scuola (<strong>amministrazione_paolo6@istitutopavoni.it</strong>, tel <strong>0331 841417</strong>).
						</TextBlock>
					</>
				)}
			</AnimatedSection>
		</div>
	);
};

export default SponsorPage;

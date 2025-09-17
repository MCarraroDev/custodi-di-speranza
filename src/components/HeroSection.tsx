import styled, { keyframes } from 'styled-components';

// Animazione per il testo
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Definiamo le props del componente
interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  imageCredits: string;
}

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: ${props => props.theme.colors.text.light};
  text-align: center;
  padding: 0 20px;
  overflow: hidden; /* Nasconde le parti dell'immagine che escono */

  /* Overlay scuro */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1; /* Assicura che l'overlay sia sopra l'immagine */
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Copre l'intera area senza distorcere l'immagine */
  z-index: 0; /* Mette l'immagine sotto il testo e l'overlay */
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 2; /* Mette il testo sopra l'overlay */
`;

const AnimatedTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 10px;
  font-family: ${props => props.theme.fonts.title};
  animation: ${fadeIn} 1s ease-out forwards;
`;

const AnimatedSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 300;
  margin-top: -10px; // Avvicina il sottotitolo al titolo con un margine negativo
  opacity: 0; // Nasconde il sottotitolo prima dell'animazione
  animation: ${fadeIn} 1s ease-out 1s forwards; // Ritardo di 1s per iniziare dopo il titolo
`;

const IllustrationCredit = styled.p`
  position: absolute;
  bottom: 5px;
  left: 20px;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts.body};
  color: rgba(255, 255, 255, 0.7);
  z-index: 2;
`;

const HeroSection: React.FC<HeroProps> = ({ title, subtitle, imageUrl, imageAlt, imageCredits }) => {
  return (
    <HeroContainer>
      <HeroImage src={imageUrl} alt={imageAlt} />
      <TextContainer>
        <AnimatedTitle>{title}</AnimatedTitle>
        <AnimatedSubtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      </TextContainer>
      <IllustrationCredit>{imageCredits}</IllustrationCredit>
    </HeroContainer>
  );
};

export default HeroSection;

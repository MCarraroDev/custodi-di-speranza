import styled from 'styled-components';
import { Link, type LinkProps } from 'react-router-dom';
import logo from '../assets/logo_ilmiopurgatorio.png';
import { navLinks } from '../data/navigation';
import { socialLinks } from '../data/socials';

import centocanti_silhouette from '../assets/logo/silhouette/white/centocanti_silhouette.png'
import chiesaverona_silhouette from '../assets/logo/silhouette/white/chiesa-verona_silhouette.png'
import rivela_silhouette from '../assets/logo/silhouette/white/rivela_silhouette.png'


// Componente Link personalizzato per scrollare in cima alla pagina
const ScrollToTopLink: React.FC<LinkProps> = ({ children, ...props }) => {
	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		window.scrollTo(0, 0);
		if (props.onClick) {
			props.onClick(event);
		}
	};

	return (
		<Link
			{...props}
			onClick={handleClick}
		>
			{children}
		</Link>
	);
};

const FooterContainer = styled.footer`
	background-color: ${(props) => props.theme.colors.background.dark};
	color: ${(props) => props.theme.colors.text.light};
	padding: 60px 40px;
	border-top: 1px solid ${(props) => props.theme.colors.border};
	margin-top: auto; /* Assicura che il footer stia in basso */
`;

const FooterContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 40px;
	max-width: 1200px;
	margin: 0 auto;
	align-items: stretch; /* Estende le colonne alla stessa altezza, permettendo la centratura verticale */

	@media (max-width: 930px) {
		grid-template-columns: 1fr;
	}
`;

const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	/* Stile per la prima colonna (logo) */
	&:first-child {
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 850px) {
		align-items: center;
	}
`;

const LogoImage = styled.img`
	width: 100%; /* Occupa la larghezza della colonna */
	max-width: 300px; /* Limite per non renderlo sproporzionato */
	height: auto;
	filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
	transition: transform 0.3s ease; /* Aggiunge una transizione fluida */

	&:hover {
		transform: scale(
			1.3
		); /* Ingrandisce leggermente il logo al passaggio del mouse */
	}
`;

const FooterTitle = styled.h3`
	font-family: ${(props) => props.theme.fonts.title};
	margin-bottom: 15px;
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => props.theme.fontSizes.large};
`;

const FooterText = styled.p`
	margin: 0;
	font-size: ${(props) => props.theme.fontSizes.small};
`;

const NavLink = styled(ScrollToTopLink)`
	color: ${(props) => props.theme.colors.text.light};
	text-decoration: none;
	font-size: ${(props) => props.theme.fontSizes.medium};
	transition: color 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
`;

const SocialLinksContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 40px;
	margin-bottom: 20px;
`;

const SocialLink = styled.a`
	color: ${(props) => props.theme.colors.text.light};
	font-size: 1.8rem;
	transition:
		color 0.3s ease,
		transform 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.colors.primary};
		transform: scale(1.1);
	}
`;

const CopyrightText = styled.p`
	text-align: center;
	width: 100%;
	margin-top: 50px;
	font-size: 0.9rem;
	color: ${(props) => props.theme.colors.text.secondary};
`;

const SilhouetteContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 24px;
	margin-top: 24px;
	margin-bottom: 8px;
`;

const SilhouetteImage = styled.img`
	height: 3.5rem;
	width: auto;
	opacity: 0.95;
`;

const SmallRights = styled.span`
	display: block;
	font-size: 0.7rem;
	color: ${(props) => props.theme.colors.text.secondary};
	margin-top: 6px;
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterContent>
				{/* Colonna per il logo */}
				<FooterColumn>
					<LogoImage
						src={logo}
						alt='Logo Il Mio Purgatorio'
					/>
				</FooterColumn>

				{/* Colonna per la navigazione */}
				<FooterColumn>
					<FooterTitle>Navigazione</FooterTitle>
					{navLinks.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
						>
							{link.label}
						</NavLink>
					))}
				</FooterColumn>

				{/* Colonna per i contatti */}
				<FooterColumn>
					<FooterTitle>Contatti</FooterTitle>
					<FooterText>Email: segreteria.didattica@istitutopavoni.it</FooterText>
					<FooterText>Segreteria Didattica: 0331.840950</FooterText>
					<FooterText>Centralino: 0331.841417</FooterText>
					<FooterText>Cellulare: 351.6187205</FooterText>
				</FooterColumn>
			</FooterContent>

			{/* Link ai social media */}
			<SocialLinksContainer>
				{socialLinks.map((social) => {
					const Icon = social.icon;
					return (
						<SocialLink
							key={social.name}
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={social.name}
						>
							<Icon />
						</SocialLink>
					);
				})}
			</SocialLinksContainer>

			{/* Silhouette logos */}
			<SilhouetteContainer>
				<SilhouetteImage src={centocanti_silhouette} alt="Centocanti" />
				<SilhouetteImage src={chiesaverona_silhouette} alt="Chiesa Verona" />
				<SilhouetteImage src={rivela_silhouette} alt="Rivela" />
			</SilhouetteContainer>

			{/* Copyright */}
			<CopyrightText>
				© {new Date().getFullYear()} CUSTODI DI SPERANZA.
				<SmallRights>Tutti i diritti Riservati.</SmallRights>
			</CopyrightText>
		</FooterContainer>
	);
};

export default Footer;

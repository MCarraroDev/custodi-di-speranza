import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/Animated/AnimatedSection';
import AnimatedTitle from '../components/Animated/AnimatedTitle';
import TextBlock from '../components/common/TextBlock';
import { pages } from '../data/pageData';
import { buttonStyles } from '../styles/shared';

// Fix per l'icona di default di Leaflet che non viene caricata correttamente con Webpack
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const TwoColumnLayout = styled.div`
	display: flex;
	align-items: stretch; // Forza le colonne ad avere la stessa altezza
	gap: 40px;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`;

const TextColumn = styled.div`
	flex: 1;
	text-align: left;
`;

const MapColumn = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// Variante di TextBlock per allineamento a sinistra
const LeftAlignedTextBlock = styled(TextBlock)`
	text-align: left;
	margin: 0 0 15px 0;
	max-width: 100%; // Rimuoviamo il max-width per il layout a colonna
`;

const MapWrapper = styled.div`
	height: 400px;
	width: 100%;
	margin-bottom: 20px;
	border-radius: 8px;
	overflow: hidden;
	border: 2px solid ${(props) => props.theme.colors.border};
`;

const InfoContainer = styled.div`
	text-align: center;
`;

const Address = styled.p`
	font-size: 1.1rem;
	color: ${(props) => props.theme.colors.text.dark};
	margin-bottom: 20px;
`;

const GoogleMapsButton = styled.a`
	${buttonStyles}
`;

const LocationPage = () => {
	const position: [number, number] = [45.7161588, 8.9094267]; // Coordinate per Istituto Lodovico Pavoni
	const googleMapsUrl = 'https://maps.app.goo.gl/L4xpNJJEPkZ3DVcE7';

	return (
		<div>
			<HeroSection
				title={pages.location.title}
				subtitle={pages.location.subtitle}
				imageUrl={pages.location.imageUrl}
				imageAlt={pages.location.imageAlt}
				imageCredits={pages.location.imageCredits}
			/>
			<AnimatedSection>
				{(isVisible) => (
					<TwoColumnLayout>
						<TextColumn>
							<AnimatedTitle isVisible={isVisible}>
								L'Istituto Lodovico Pavoni
							</AnimatedTitle>
							<LeftAlignedTextBlock>
								La Scuola Secondaria di Primo Grado “Paolo VI” Istituto Pavoni
								di Tradate è una realtà radicata nel territorio, con oltre
								quarant’anni di esperienza educativa. Fondata nel 1980 e
								paritaria dal 2001, sorge in un contesto unico: un edificio
								storico immerso nel verde, punto di incontro per ragazzi
								provenienti da Tradate e dalle province di Varese e Como.
							</LeftAlignedTextBlock>
							<LeftAlignedTextBlock>
								Il nostro Istituto è una comunità viva in cui studio, creatività
								e valori crescono fianco a fianco. Qui la scuola è anche casa: un
								luogo dove ogni studente trova spazi per esprimersi, attività
								per mettersi alla prova e persone pronte ad ascoltarlo.
							</LeftAlignedTextBlock>
						</TextColumn>
						<MapColumn>
							<MapWrapper>
								<MapContainer
									center={position}
									zoom={16}
									scrollWheelZoom={false}
									style={{ height: '100%', width: '100%' }}
								>
									<TileLayer
										attribution='&copy; OpenStreetMap contributors'
										url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
									/>
									<Marker position={position}>
										<Popup>
											Istituto Lodovico Pavoni <br /> Via Sopranzi 26, Tradate
											(VA)
										</Popup>
									</Marker>
								</MapContainer>
							</MapWrapper>
							<InfoContainer>
								<Address>
									Istituto Lodovico Pavoni, Via Sopranzi 26, 21049 Tradate (VA),
									Italia
								</Address>
								<GoogleMapsButton
									href={googleMapsUrl}
									target='_blank'
									rel='noopener noreferrer'
								>
									Apri in Google Maps
								</GoogleMapsButton>
							</InfoContainer>
						</MapColumn>
					</TwoColumnLayout>
				)}
			</AnimatedSection>
		</div>
	);
};

export default LocationPage;

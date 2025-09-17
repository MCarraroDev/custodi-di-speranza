import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

type ImageItem = {
	src?: string;
	img?: string;
	alt?: string;
};

const SplideSection: React.FC<{ images: ImageItem[] }> = ({ images }) => {
	const options = {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		perPage: 3,
		perMove: 1,
		gap: '1rem',
		arrows: false,
		pagination: false,
		autoScroll: {
			speed: 1,
            pauseOnHover: false,
		},
	} as any;

	return (
		<div style={{ position: 'relative', width: '100%', overflow: 'hidden', margin: '20px 0 10px', padding: 0 }}>
			<div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
				<Splide options={options} extensions={{ AutoScroll }} aria-label="Gallery">
					{images.map((img, i) => {
						const src = img.src || img.img || '';
						return (
							<SplideSlide key={i}>
								<div style={{ minWidth: 220 }}>
									<img src={src} alt={img.alt || `slide-${i}`} style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', borderRadius: 6 }} />
								</div>
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		</div>
	);
};

export default SplideSection;

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';
import FadeContainer from './FadeContainer';

type ImageItem = {
	src?: string;
	img?: string;
	alt?: string;
};

type Props = {
	images: ImageItem[] | string[];
	shuffle?: boolean;
	height?: number; // slide height in px
	fit?: 'cover' | 'contain';
	options?: any;
	fullWidth?: boolean;
	widthVw?: number; // width in vw when not fullWidth (default 70)
};

const SplideSection: React.FC<Props> = ({
	images,
	shuffle = false,
	height = 260,
	fit = 'cover',
	options: extraOptions = {},
	fullWidth = false,
	widthVw = 70,
}) => {
	// normalize to string URLs
	const normalized: string[] = (images as any[]).map((it) =>
		typeof it === 'string' ? it : it.src || it.img || ''
	);

	const shuffleArray = (arr: string[]) => {
		const a = arr.slice();
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	};

	const hasAdjacentDuplicates = (arr: string[]) => {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] === arr[i + 1]) return true;
		}
		return false;
	};

	const avoidAdjacentDuplicates = (input: string[]) => {
		if (input.length < 2) return input.slice();
		// Try multiple shuffles to avoid adjacency
		let attempts = 0;
		let candidate = input.slice();
		while (attempts < 12) {
			candidate = shuffleArray(input);
			if (!hasAdjacentDuplicates(candidate)) return candidate;
			attempts++;
		}

		// If still problematic, do a local fix: whenever duplicate adjacent, try to swap with a different later element
		for (let i = 0; i < candidate.length - 1; i++) {
			if (candidate[i] === candidate[i + 1]) {
				// find a j > i+1 with different value
				let j = i + 2;
				while (j < candidate.length && candidate[j] === candidate[i]) j++;
				if (j < candidate.length) {
					[candidate[i + 1], candidate[j]] = [candidate[j], candidate[i + 1]];
				}
			}
		}

		return candidate;
	};

	const list = shuffle ? avoidAdjacentDuplicates(normalized) : normalized;
	const defaultOptions = {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		perPage: 3,
		perMove: 1,
		gap: '1rem',
		breakpoints: {
			640: {
				perPage: 1,
				gap: '0.5rem',
			},
			900: {
				perPage: 2,
				gap: '0.75rem',
			},
			1200: {
				perPage: 3,
				gap: '1rem',
			},
		},
		arrows: false,
		pagination: false,
		autoScroll: {
			speed: 1,
			pauseOnHover: false,
		},
	} as any;

	const options = { ...defaultOptions, ...extraOptions };

	const outerStyle: React.CSSProperties = {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		margin: '20px 0 10px',
		padding: 0,
		display: 'flex',
		justifyContent: 'center',
	};

	const innerStyle: React.CSSProperties = fullWidth
		? { width: '100vw', marginLeft: 'calc(50% - 50vw)', padding: 0 }
		: {
				width: `${widthVw}vw`,
				margin: '0 auto',
				padding: '0 0',
				position: 'relative',
			};

	return (
		<FadeContainer>
			<div style={outerStyle}>
				<div style={innerStyle}>
					{fullWidth ? (
						<div
							style={{
								width: '100vw',
								marginLeft: 'calc(50% - 50vw)',
								position: 'relative',
							}}
						>
							<Splide
								options={options}
								extensions={{ AutoScroll }}
								aria-label='Gallery'
							>
								{list.map((src, i) => (
									<SplideSlide key={i}>
										<div style={{ width: '100%' }}>
											<img
												src={src}
												alt={`slide-${i}`}
												style={{
													width: '100%',
													height: height,
													objectFit: fit,
													display: 'block',
													borderRadius: 6,
												}}
											/>
										</div>
									</SplideSlide>
								))}
							</Splide>
						</div>
					) : (
						<div style={{ position: 'relative' }}>
							<Splide
								options={options}
								extensions={{ AutoScroll }}
								aria-label='Gallery'
							>
								{list.map((src, i) => (
									<SplideSlide key={i}>
										<div style={{ width: '100%' }}>
											<img
												src={src}
												alt={`slide-${i}`}
												style={{
													width: '100%',
													height: height,
													objectFit: fit,
													display: 'block',
													borderRadius: 6,
												}}
											/>
										</div>
									</SplideSlide>
								))}
							</Splide>
						</div>
					)}
				</div>
			</div>
		</FadeContainer>
	);
};

export default SplideSection;

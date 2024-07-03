import { IBM_Plex_Serif, Spectral_SC } from 'next/font/google';

export const type_first = IBM_Plex_Serif({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--type-first-ibm-plex',
	display: 'swap',
});

export const type_second = Spectral_SC({
	weight: ['400', '600'],
	subsets: ['latin'],
	variable: '--type-second-spectral',
	display: 'swap',
});

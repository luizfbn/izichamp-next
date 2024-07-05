import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { type_first, type_second } from '@/functions/fonts';

export const metadata: Metadata = {
	title: 'Izi champ',
	description: 'Simule compras de campeões e skins',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-BR'
			className={`${type_first.variable} ${type_second.variable}`}
		>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

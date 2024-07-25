import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import patchGet from '@/actions/patch-get';
import type { Metadata } from 'next';
import { type_first, type_second } from '@/functions/fonts';

export const metadata: Metadata = {
	title: 'Izi champ',
	description: 'Simule compras de campeões e skins',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { data } = await patchGet();

	return (
		<html
			lang='pt-BR'
			className={`${type_first.variable} ${type_second.variable}`}
		>
			<body>
				<Header />
				{children}
				<Footer patch={data} />
			</body>
		</html>
	);
}

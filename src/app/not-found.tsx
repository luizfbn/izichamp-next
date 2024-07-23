import styles from './not-found.module.css';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Izi champ | Não encontrado',
};

export default function NotFound() {
	return (
		<div className={`${styles.notFound} container`}>
			<Image
				src={'/assets/not-found.svg'}
				alt={'Não encotrado'}
				width={50}
				height={50}
			/>
			<p>Página não encontrada</p>
		</div>
	);
}

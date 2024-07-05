import styles from './page.module.css';
import Simulator from '@/components/simulator';
import championsSkinsGet from '@/actions/champions-skins-get';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Izi champ | Home',
};

export default async function Home() {
	const { data } = await championsSkinsGet();

	return (
		<section className={`${styles.home} container animeTopBottom`}>
			<h1>Planeje e compre</h1>
			<h2>
				Simule um carrinho de compras para ver se os campeões e skins cabem no
				seu bolso
			</h2>
			{data && <Simulator data={data} />}
		</section>
	);
}

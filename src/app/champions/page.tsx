import styles from './champions.module.css';
import React from 'react';
import championsGet from '@/actions/champions-get';
import ChampionList from '@/components/champion-list/champion-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Izi champ | Campeões',
};

export default async function ChampionsPage() {
	const { data } = await championsGet();

	return (
		<section className={`${styles.champions} container animeTopBottom`}>
			{data && <ChampionList data={data} />}
		</section>
	);
}

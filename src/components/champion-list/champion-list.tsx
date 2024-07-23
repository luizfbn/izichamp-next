'use client';

import styles from './champion-list.module.css';
import React from 'react';
import Link from 'next/link';
import SearchInput from '../search/search-input';
import Card from '../card/card';
import { IChampionList } from '@/actions/champions-get';

export default function ChampionList({ data }: { data: IChampionList[] }) {
	const [infinite, setInfinite] = React.useState(true);
	const [searchInput, setSearchInput] = React.useState('');
	const [championLength, setChampionLength] = React.useState(8);
	const championListFiltered = searchInput
		? data.filter((item) => {
				return (
					item.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
				);
		  })
		: [];

	React.useEffect(() => {
		setChampionLength(8);
		setInfinite(true);
	}, [searchInput]);

	React.useEffect(() => {
		let wait = false;

		function infiniteScroll() {
			if (infinite && data.length) {
				const scroll = window.scrollY;
				const height = document.body.offsetHeight - window.innerHeight;
				if (scroll > height * 0.9 && !wait) {
					const length = championLength + 8;
					if (length > data.length) {
						setChampionLength(data.length);
						setInfinite(false);
					} else if (
						championListFiltered.length &&
						length > championListFiltered.length
					) {
						setChampionLength(
							championListFiltered.length ? championListFiltered.length : 8
						);
						setInfinite(false);
					} else {
						setChampionLength(length);
					}
					wait = true;
					setTimeout(() => {
						wait = false;
					}, 500);
				}
			}
		}

		window.addEventListener('wheel', infiniteScroll);
		window.addEventListener('scroll', infiniteScroll);
		return () => {
			window.removeEventListener('wheel', infiniteScroll);
			window.removeEventListener('scroll', infiniteScroll);
		};
	}, [infinite, championLength, data.length, championListFiltered.length]);

	return (
		<>
			<div className={styles.searchContainer}>
				<SearchInput
					type='text'
					value={searchInput}
					onChange={({ target }) => setSearchInput(target.value)}
					placeholder='Busque seu campeão'
				/>
			</div>
			<div className={styles.championList}>
				{(searchInput ? championListFiltered : data)
					.filter((item, idx) => idx < championLength)
					.map((champion) => (
						<Link href={`/champions/${champion.id}`} key={champion.id}>
							<Card
								image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
								onHoverStyle
							>
								<div className={styles.cardTitle}>
									<h3>{champion.name}</h3>
									<h4>{champion.title}</h4>
								</div>
							</Card>
						</Link>
					))}
			</div>
		</>
	);
}

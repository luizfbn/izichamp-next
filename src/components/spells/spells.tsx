'use client';

import styles from './spells.module.css';
import React from 'react';
import ShowMore from '../helper/show-more';
import Image from 'next/image';
import { IChampionById } from '@/actions/champion-get';

export default function Spells({
	spells,
}: {
	spells: IChampionById['spells'];
}) {
	const [activeTab, setActiveTab] = React.useState(0);
	const infoRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (infoRef.current) {
			infoRef.current.classList.remove('animeTopBottom');
			void infoRef.current.offsetWidth;
			infoRef.current.classList.add('animeTopBottom');
		}
	}, [activeTab]);

	return (
		<div className={styles.spells}>
			<ul>
				{spells.map((spell, idx) => (
					<li
						key={spell.name}
						className={`${styles.ability} ${
							activeTab === idx ? styles.active : ''
						}`}
						onClick={() => setActiveTab(idx)}
					>
						<Image
							src={spell.abilityIconPath}
							alt={spell.name}
							width={64}
							height={64}
						/>
						<h4>{spell.spellKey}</h4>
					</li>
				))}
			</ul>
			<div ref={infoRef} className={styles.info}>
				<h3>{spells[activeTab].name}</h3>
				<p>
					<ShowMore text={spells[activeTab].description} length={200} />
				</p>
			</div>
		</div>
	);
}

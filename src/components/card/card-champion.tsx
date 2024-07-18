import styles from './card-champion.module.css';
import Image from 'next/image';

type ICardChampion = {
	rp: number;
	blueEssence: number;
};

export default function CardChampion({ rp, blueEssence }: ICardChampion) {
	return (
		<ul className={styles.championCard}>
			<li>
				<Image
					src={'/assets/rp.svg'}
					alt='Riot points'
					width={20}
					height={20}
				/>
				<h4>{rp}</h4>
			</li>
			<li>
				<Image
					src={'/assets/be.svg'}
					alt='Blue essence'
					width={17}
					height={20}
				/>
				<h4>{blueEssence}</h4>
			</li>
		</ul>
	);
}

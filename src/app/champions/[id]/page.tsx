import styles from './champion.module.css';
import Image from 'next/image';
import championGet from '@/actions/champion-get';
import Card from '@/components/card/card';
import CardChampion from '@/components/card/card-champion';
import ShowMore from '@/components/helper/show-more';
import Spells from '@/components/spells/spells';
import SlideSkins from '@/components/slide/slide-skins';

type ChampionIdParams = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: ChampionIdParams) {
	const { data } = await championGet(params.id);

	if (!data)
		return {
			title: 'Izi champ | Campeão',
		};
	return {
		title: 'Izi champ | ' + data.name,
	};
}

export default async function ChampionPage({ params }: ChampionIdParams) {
	const { data } = await championGet(params.id);

	if (data)
		return (
			<section className={`${styles.champion} container animeTopBottom`}>
				<div className={styles.title}>
					<Image
						src={data.squarePortraitPath}
						alt={data.name}
						width={120}
						height={120}
					/>
					<h1>{data.name}</h1>
					<h3>{data.title}</h3>
					<div>
						<CardChampion
							rp={data.cost.rp}
							blueEssence={data.cost.blueEssence}
						/>
					</div>
				</div>
				<div className={styles.championCardContainer}>
					<Card
						image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.alias}_0.jpg`}
						size={{ width: '280px', height: '504px' }}
					>
						<CardChampion
							rp={data.cost.rp}
							blueEssence={data.cost.blueEssence}
						/>
					</Card>
				</div>
				<div className={styles.about}>
					<h2>Sobre</h2>
					<p>
						<ShowMore text={data.shortBio} length={250} />
					</p>
				</div>
				<div className={styles.spells}>
					<h2>Habilidades</h2>
					<Spells
						spells={[{ spellKey: 'p', ...data.passive }, ...data.spells]}
					/>
				</div>
				<div className={styles.skins}>
					<h2>Skins</h2>
					<SlideSkins skins={data.skins} />
				</div>
			</section>
		);
	else return <></>;
}

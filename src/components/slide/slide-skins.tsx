import styles from './slide-skins.module.css';
import Slide from './slide';
import Card from '../card/card';
import Image from 'next/image';
import { IChampionById } from '@/actions/champion-get';

export default function SlideSkins({
	skins,
}: {
	skins: IChampionById['skins'];
}) {
	return (
		<Slide>
			{skins.map((skin) => (
				<Card key={skin.id} image={skin.loadScreenPath}>
					<div className={styles.cardTitleSkin}>
						<h3>{skin.name}</h3>
						<ul>
							<li>
								<Image
									src={'/assets/rp.svg'}
									alt='Riot points'
									width={20}
									height={20}
								/>
								<h4>{skin.cost.rp}</h4>
							</li>
							<li>
								<Image
									src={'/assets/oe.svg'}
									alt='Orange essence'
									width={15}
									height={20}
								/>
								<h4>{skin.cost.orangeEssence}</h4>
							</li>
						</ul>
					</div>
				</Card>
			))}
		</Slide>
	);
}

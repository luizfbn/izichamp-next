import styles from './search-result.module.css';
import Image from 'next/image';
import { ISeachSelect } from '@/types/search';

type ISearchResult = {
	list: ISeachSelect[];
	inputValue: string;
	onClickItem: (item: ISeachSelect) => void;
};

export default function SearchResult({
	list,
	inputValue,
	onClickItem,
}: ISearchResult) {
	return (
		<div className={`animeTopBottom ${styles.result}`}>
			<ul>
				{list
					.filter((item, idx) => idx < 20)
					.map((item) => (
						<li
							className={styles.resultItem}
							key={item.id}
							onClick={() => onClickItem(item)}
						>
							{item.type === 'Champion' ? (
								<Image
									className={styles.resultItemIcon}
									src={'/assets/champion.svg'}
									alt='Champion'
									width={18}
									height={20}
								/>
							) : (
								<Image
									className={styles.resultItemIcon}
									src={'/assets/skin.svg'}
									alt='Skin'
									width={20}
									height={20}
								/>
							)}
							<Image
								src={item.tilePath}
								alt=''
								width={50}
								height={50}
								loading='lazy'
							/>
							<p>{item.name}</p>
						</li>
					))}
				{!list.length && inputValue && (
					<li className={styles.resultNotFound}>
						<Image
							src={'/assets/not-found.svg'}
							alt='Not found'
							width={50}
							height={50}
						/>
						<p>Campeão ou skin não encontrado</p>
					</li>
				)}
			</ul>
		</div>
	);
}

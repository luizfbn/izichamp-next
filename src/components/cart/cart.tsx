import styles from './cart.module.css';
import Image from 'next/image';
import CartItem from './cart-item';
import CartTotal from './cart-total';
import { ICartItem } from '@/types/cart';
import { IChampion, ISkin } from '@/actions/champions-skins-get';

type ICart = {
	list: ICartItem[];
	setList: React.Dispatch<React.SetStateAction<ICartItem[]>>;
	setSearchList: React.Dispatch<React.SetStateAction<ICartItem[]>>;
};

export function resetItem(item: IChampion | ISkin): ICartItem {
	return {
		...item,
		selected: false,
		disabledPrice: {
			...(item.type === 'Champion' ? { BE: false } : { OE: false }),
			RP: false,
		},
		discountRP: {
			hasDiscount: false,
			newPrice: item.cost.rp,
		},
		discountBE: {
			hasDiscount: false,
			newPrice: item.type === 'Champion' ? item.cost.blueEssence : 0,
		},
	};
}

export default function Cart({ list, setList, setSearchList }: ICart) {
	function handleDelete(item: ICartItem) {
		setList((list) => {
			return list.filter((listItem) => listItem.id !== item.id);
		});
		setSearchList((list) => {
			return list.map((itemSearch) => {
				if (itemSearch.id === item.id) {
					return resetItem(itemSearch);
				}
				return itemSearch;
			});
		});
	}

	function handleDeleteAll() {
		setList([]);
		setSearchList((list) => {
			return list.map((itemSearch) => {
				return resetItem(itemSearch);
			});
		});
	}

	if (!list.length)
		return (
			<div className={`${styles.emptyCart} animeTopBottom`}>
				<Image
					src={'/assets/coins.svg'}
					alt='Moedas'
					width={225}
					height={214}
				/>
				<h2>Seu carrinho está vazio</h2>
			</div>
		);
	return (
		<div className={styles.cart}>
			<ul>
				{list.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						setList={setList}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<CartTotal list={list} onDelete={handleDeleteAll} />
		</div>
	);
}

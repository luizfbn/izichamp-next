'use client';

import styles from './cart-item.module.css';
import React from 'react';
import Image from 'next/image';
import CartPrices from './cart-prices';
import { ICartItem } from '@/types/cart';

type ICartItemProps = {
	item: ICartItem;
	setList: React.Dispatch<React.SetStateAction<ICartItem[]>>;
	onDelete: (item: ICartItem) => void;
};

export default function CartItem({ item, setList, onDelete }: ICartItemProps) {
	const [cartItem, setCartItem] = React.useState<ICartItem>(item);
	const itemRef = React.useRef<HTMLLIElement>(null);

	function handleDelete(item: ICartItem) {
		if (itemRef.current) {
			itemRef.current.classList.add('animeBottomTop');
		}
		setTimeout(() => {
			onDelete(item);
		}, 500);
	}

	React.useEffect(() => {
		setList((cartList) => {
			const updatedCartList = cartList.map((item) => {
				if (item.id === cartItem.id) return cartItem;
				return item;
			});
			return updatedCartList;
		});
	}, [cartItem, setList]);

	if (!cartItem) return null;
	return (
		<li ref={itemRef} className={`${styles.cartItem} animeTopBottom`}>
			<Image
				src={cartItem.tilePath}
				alt=''
				width={80}
				height={80}
				loading='lazy'
			/>
			<div className={styles.cartItemTitle}>
				<h2>{cartItem.name}</h2>
				{cartItem.type === 'Champion' && <h4>{cartItem.title}</h4>}
			</div>
			<CartPrices cartItem={cartItem} setCartItem={setCartItem} />
			<button
				className={styles.deleteButton}
				onClick={() => handleDelete(cartItem)}
			>
				<Image src={'/assets/trash.svg'} alt='Trash' width={12} height={14} />
			</button>
		</li>
	);
}

'use client';

import styles from './cart-total.module.css';
import React from 'react';
import Image from 'next/image';
import { ICartItem } from '@/types/cart';

type ICartTotal = {
	list: ICartItem[];
	onDelete: () => void;
};

export default function CartTotal({ list, onDelete }: ICartTotal) {
	const [total, setTotal] = React.useState([0, 0, 0]);

	React.useEffect(() => {
		setTotal(() => {
			const total = [0, 0, 0];
			list.forEach((item) => {
				if (item.type === 'Champion' && !item.disabledPrice.BE)
					total[0] += item.discountBE.newPrice;
				if (item.type === 'Champion' && !item.disabledPrice.RP)
					total[2] += item.discountRP.newPrice;
				if (item.type === 'Skin' && !item.disabledPrice.RP)
					total[2] += item.discountRP.newPrice;
				if (item.type === 'Skin' && !item.disabledPrice.OE)
					total[1] += item.cost.orangeEssence;
			});
			return total;
		});
	}, [list]);

	return (
		<div className={`${styles.total} animeTopBottom`}>
			<h3>Totais</h3>
			<ul>
				<li>
					<p>Total de essência azul</p>
					<span>
						<Image
							src={'/assets/be.svg'}
							alt='Blue essence'
							width={17}
							height={20}
						/>
						{total[0]}
					</span>
				</li>
				<li>
					<p>Total de essência laranja</p>
					<span>
						<Image
							src={'/assets/oe.svg'}
							alt='Orange essence'
							width={15}
							height={20}
						/>
						{total[1]}
					</span>
				</li>
				<li>
					<p>Total de riot points</p>
					<span>
						<Image
							src={'/assets/rp.svg'}
							alt='Riot points'
							width={20}
							height={20}
						/>
						{total[2]}
					</span>
				</li>
			</ul>
			<button className='button' onClick={onDelete}>
				Remover tudo
			</button>
		</div>
	);
}

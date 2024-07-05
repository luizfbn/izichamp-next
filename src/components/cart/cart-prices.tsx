'use client';

import styles from './cart-prices.module.css';
import React from 'react';
import CartPrice from './cart-price';
import Image from 'next/image';
import RpCheckIcon from '../../../public/assets/rp-check.svg';
import BeCheckIcon from '../../../public/assets/be-check.svg';
import { ICartItem } from '@/types/cart';
import { IChampion } from '@/actions/champions-skins-get';

type ICartPrices = {
	cartItem: ICartItem;
	setCartItem: React.Dispatch<React.SetStateAction<ICartItem>>;
};

export default function CartPrices({ cartItem, setCartItem }: ICartPrices) {
	const [timer, setTimer] = React.useState<NodeJS.Timeout>();
	const [inputValue, setInputValue] = React.useState<number>(handleDiscount());

	function handleDiscount() {
		return Number(
			((1 - cartItem.discountRP.newPrice / cartItem.cost.rp) * 100).toFixed(2)
		);
	}

	function handleCheckbox(
		event: React.ChangeEvent<HTMLInputElement>,
		type: 'BE' | 'RP'
	) {
		if (type === 'BE') {
			setCartItem((item) => {
				return {
					...item,
					...(item.type === 'Champion' && {
						discountBE: {
							hasDiscount: event.target.checked,
							newPrice: event.target.checked
								? Number((item.cost.blueEssence * 0.6).toFixed(2))
								: item.cost.blueEssence,
						},
					}),
				};
			});
		}
		if (type === 'RP') {
			setCartItem((item) => {
				return {
					...item,
					discountRP: {
						hasDiscount: event.target.checked,
						newPrice: item.cost.rp,
					},
				};
			});
		}
	}

	function handleDisablePrice(type: 'BE' | 'OE' | 'RP') {
		setCartItem((item) => {
			return {
				...item,
				disabledPrice: {
					...item.disabledPrice,
					[type]: !item.disabledPrice[type],
				},
			};
		});
	}

	function handleRpDiscount(value: number) {
		const discount = value / 100;
		setCartItem((item) => {
			return {
				...item,
				discountRP: {
					newPrice: Number((item.cost.rp - item.cost.rp * discount).toFixed(2)),
					hasDiscount: true,
				},
			};
		});
	}

	function handleRpInputChange(inputValue: string) {
		const value = Number(inputValue);
		setInputValue(value);
		clearTimeout(timer);
		const timeout = setTimeout(() => {
			const validValue = value >= 0 && value <= 100;
			handleRpDiscount(validValue ? value : 0);
		}, 500);
		setTimer(timeout);
	}

	return (
		<div className={styles.prices}>
			<CartPrice
				icon={
					<Image
						src={'/assets/rp.svg'}
						alt='Riot points'
						width={20}
						height={20}
					/>
				}
				price={{
					value: cartItem.discountRP.newPrice,
					oldValue: cartItem.discountRP.hasDiscount
						? cartItem.cost.rp
						: undefined,
					disabled: cartItem.disabledPrice.RP,
					onClick: () => handleDisablePrice('RP'),
				}}
				checkbox={{
					id: cartItem.id + '_rp',
					checked: cartItem.discountRP.hasDiscount,
					icon: <RpCheckIcon />,
					onChange: (event) => handleCheckbox(event, 'RP'),
				}}
				inputNumber={
					cartItem.discountRP.hasDiscount
						? {
								value: inputValue,
								onChange: ({ target }) => handleRpInputChange(target.value),
						  }
						: undefined
				}
			/>
			{cartItem.type === 'Skin' ? (
				<CartPrice
					icon={
						<Image
							src={'/assets/oe.svg'}
							alt='Orange essence'
							width={15}
							height={20}
						/>
					}
					price={{
						value: cartItem.cost.orangeEssence,
						disabled: cartItem.disabledPrice.OE,
						onClick: () => handleDisablePrice('OE'),
					}}
				/>
			) : (
				<CartPrice
					icon={
						<Image
							src={'/assets/be.svg'}
							alt='Blue essence'
							width={17}
							height={20}
						/>
					}
					price={{
						value: cartItem.discountBE.newPrice,
						oldValue: cartItem.discountBE.hasDiscount
							? (cartItem as IChampion).cost.blueEssence
							: undefined,
						disabled: cartItem.disabledPrice.BE,
						onClick: () => handleDisablePrice('BE'),
					}}
					checkbox={{
						id: cartItem.id + '_be',
						checked: cartItem.discountBE.hasDiscount,
						icon: <BeCheckIcon />,
						onChange: (event) => handleCheckbox(event, 'BE'),
					}}
				/>
			)}
		</div>
	);
}

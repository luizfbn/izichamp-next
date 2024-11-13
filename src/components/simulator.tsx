'use client';

import styles from './simulator.module.css';
import React from 'react';
import Search from './search/search';
import Cart, { resetItem } from './cart/cart';
import { IChampion, ISkin } from '@/actions/champions-skins-get';
import { ICartItem } from '@/types/cart';
import { ISeachSelect } from '@/types/search';

function getSavedData(window: Window) {
	const savedList = window.localStorage.getItem('cartList');
	const list: ICartItem[] = savedList ? JSON.parse(savedList) : [];
	return list;
}

export default function Simulator({ data }: { data: (IChampion | ISkin)[] }) {
	const [selectedList, setSelectedList] = React.useState<ICartItem[]>([]);
	const [searchList, setSearchList] = React.useState<ICartItem[]>([]);
	const initialRender = React.useRef(true);

	React.useEffect(() => {
		setSelectedList(getSavedData(window));
	}, []);

	React.useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		window.localStorage.setItem('cartList', JSON.stringify(selectedList));
	}, [selectedList]);

	React.useEffect(() => {
		if (data && data.length) {
			const list = data.map((item) => {
				return resetItem(item as ICartItem);
			});

			const savedData: ICartItem[] = getSavedData(window);
			if (savedData.length) {
				const savedSearchList = list.map((item) => {
					const i = savedData.find((savedItem) => savedItem.id === item.id);
					return i ? i : item;
				});
				setSearchList(savedSearchList);
			} else {
				setSearchList(list);
			}
		}
	}, [data]);

	return (
		<>
			<div className={styles.searchContainer}>
				<Search
					list={searchList}
					placeholder='Busque e adicione seu campeão ou skin'
					setResponseList={
						setSelectedList as React.Dispatch<
							React.SetStateAction<ISeachSelect[]>
						>
					}
				/>
			</div>
			<Cart
				list={selectedList}
				setList={setSelectedList}
				setSearchList={setSearchList}
			/>
		</>
	);
}

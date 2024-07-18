'use server';

import apiError from '@/functions/api-error';
import { API_CHAMPION_SKIN_GET } from '@/functions/api';

export type IChampion = {
	type: 'Champion';
	id: number;
	key: string;
	name: string;
	title: string;
	tilePath: string;
	cost: {
		rp: number;
		blueEssence: number;
	};
};

export type ISkin = {
	type: 'Skin';
	id: number;
	name: string;
	tilePath: string;
	loadScreenPath: string;
	cost: {
		rp: number;
		orangeEssence: number;
	};
};

export default async function championsSkinsGet() {
	try {
		const { url } = API_CHAMPION_SKIN_GET();
		const response = await fetch(url, {
			next: {
				revalidate: 10,
			},
		});
		if (!response.ok)
			throw new Error('Erro ao pegar lista de campeões e skins');
		const data = (await response.json()) as (IChampion | ISkin)[];
		return { data, ok: true, error: '' };
	} catch (error: unknown) {
		return apiError(error);
	}
}

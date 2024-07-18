'use server';

import apiError from '@/functions/api-error';
import { API_CHAMPION_GET } from '@/functions/api';
import { ISkin } from './champions-skins-get';

export type IChampionById = {
	id: number;
	name: string;
	alias: string;
	title: string;
	shortBio: string;
	squarePortraitPath: string;
	cost: {
		rp: number;
		blueEssence: number;
	};
	passive: {
		name: string;
		abilityIconPath: string;
		description: string;
	};
	spells: {
		spellKey: string;
		name: string;
		abilityIconPath: string;
		description: string;
	}[];
	skins: ISkin[];
};

export default async function championGet(id: string) {
	try {
		const { url } = API_CHAMPION_GET(id);
		const response = await fetch(url, {
			next: {
				revalidate: 10,
			},
		});
		if (!response.ok) throw new Error('Erro ao pegar campeão');
		const data = (await response.json()) as IChampionById;
		return { data, ok: true, error: '' };
	} catch (error: unknown) {
		return apiError(error);
	}
}

'use server';

import apiError from '@/functions/api-error';
import { API_CHAMPIONS_GET } from '@/functions/api';
import { IChampion } from './champions-skins-get';

export type IChampionList = Omit<IChampion, 'tilePath' | 'cost'> & {
	id: string;
};

export default async function championsGet() {
	try {
		const { url } = API_CHAMPIONS_GET();
		const response = await fetch(url, {
			next: {
				revalidate: 10,
			},
		});
		if (!response.ok) throw new Error('Erro ao pegar lista de campeões');
		const data = (await response.json()) as IChampionList[];
		return { data, ok: true, error: '' };
	} catch (error: unknown) {
		return apiError(error);
	}
}

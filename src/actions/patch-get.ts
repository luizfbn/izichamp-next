'use server';

import apiError from '@/functions/api-error';
import { API_PATCH_GET } from '@/functions/api';

export default async function patchGet() {
	try {
		const { url } = API_PATCH_GET();
		const response = await fetch(url, {
			next: {
				revalidate: 3600 * 4,
			},
		});
		if (!response.ok) throw new Error('Erro ao pegar patch');
		const data = await response.text();
		return { data, ok: true, error: '' };
	} catch (error: unknown) {
		return apiError(error);
	}
}

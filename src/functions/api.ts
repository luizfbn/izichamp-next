export const API_URL = process.env.API_URL
	? process.env.API_URL
	: 'http://localhost:3333';

export function API_CHAMPIONS_GET() {
	return {
		url: API_URL + '/champions',
	};
}

export function API_CHAMPION_GET(id: string) {
	return {
		url: API_URL + `/champions/${id}`,
	};
}

export function API_CHAMPION_SKIN_GET() {
	return {
		url: API_URL,
	};
}

export function API_PATCH_GET() {
	return {
		url: API_URL + '/patch',
	};
}

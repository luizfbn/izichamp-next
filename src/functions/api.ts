export const API_URL = 'http://localhost:3333';

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

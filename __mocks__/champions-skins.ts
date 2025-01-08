import { IChampion, ISkin } from '@/actions/champions-skins-get';

export const ChampionsAndSkins: (IChampion | ISkin)[] = [
	{
		type: 'Champion',
		id: 32,
		key: 'Amumu',
		name: 'Amumu',
		tilePath:
			'http://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/Amumu.png',
		title: 'a Múmia Triste',
		cost: {
			rp: 260,
			blueEssence: 450,
		},
	},
	{
		type: 'Skin',
		id: 32001,
		name: 'Amumu Faraó',
		tilePath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin01/images/amumu_splash_tile_1.jpg',
		loadScreenPath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin01/amumuloadscreen_1.jpg',
		cost: {
			rp: 520,
			orangeEssence: 220,
		},
	},
	{
		type: 'Skin',
		id: 32002,
		name: 'Amumu Jogos de Inverno',
		tilePath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin02/images/amumu_splash_tile_2.jpg',
		loadScreenPath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin02/amumuloadscreen_2.jpg',
		cost: {
			rp: 520,
			orangeEssence: 220,
		},
	},
	{
		type: 'Skin',
		id: 32003,
		name: 'Emumu',
		tilePath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin03/images/amumu_splash_tile_3.jpg',
		loadScreenPath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin03/amumuloadscreen_3.jpg',
		cost: {
			rp: 520,
			orangeEssence: 220,
		},
	},
];

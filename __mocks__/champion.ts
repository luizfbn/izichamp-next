import { IChampionById } from '@/actions/champion-get';

export const Champion: IChampionById = {
	id: 32,
	name: 'Amumu',
	alias: 'Amumu',
	title: 'a Múmia Triste',
	shortBio:
		'Reza a lenda que Amumu é uma alma solitária e melancólica da antiga Shurima que vaga sem rumo pelo mundo em busca de um amigo. Amaldiçoado por um feitiço ancestral para permanecer só pela eternidade, seu toque traz a morte e sua afeição, a ruína. Aqueles que afirmam já tê-lo visto o descrevem como um morto-vivo franzino e coberto por faixas asquerosas. Amumu já inspirou tantos mitos, folclore e lendas contadas por muitas gerações, que já é impossível separar a verdade da ficção.',
	squarePortraitPath:
		'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/32.png',
	cost: {
		rp: 260,
		blueEssence: 450,
	},
	passive: {
		name: 'Toque Amaldiçoado',
		abilityIconPath:
			'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/hud/icons2d/amumu_passive.png',
		description:
			'Os ataques básicos de Amumu  Amaldiçoam  seus inimigos, fazendo com que recebam Dano Verdadeiro adicional de qualquer Dano Mágico causado a eles.',
	},
	spells: [
		{
			spellKey: 'q',
			name: 'Lançar Bandagens',
			abilityIconPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/hud/icons2d/amumu_q.png',
			description:
				'Amumu lança uma bandagem pegajosa em seu alvo e se lança em sua direção, causando dano e atordoamento.',
		},
		{
			spellKey: 'w',
			name: 'Desespero',
			abilityIconPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/hud/icons2d/amumu_w.png',
			description:
				'Tomados pela angústia, inimigos próximos perdem um percentual de sua Vida máxima a cada segundo e suas  Maldições  são restauradas.',
		},
		{
			spellKey: 'e',
			name: 'Chilique',
			abilityIconPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/hud/icons2d/amumu_e.png',
			description:
				'Reduz permanentemente o Dano Físico que Amumu sofreria. Amumu pode liberar sua fúria, causando dano a inimigos próximos. Sempre que Amumu é atingido, o Tempo de Recarga de Chilique é reduzido.',
		},
		{
			spellKey: 'r',
			name: 'A Maldição da Múmia Triste',
			abilityIconPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/hud/icons2d/amumu_r.png',
			description:
				'Amumu amarra unidades inimigas ao seu redor com ataduras, aplicando  Maldição , causando dano e atordoando-as.',
		},
	],
	skins: [
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
		{
			type: 'Skin',
			id: 32004,
			name: 'Amumu Presente de Grego',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin04/images/amumu_splash_tile_4.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin04/amumuloadscreen_4.jpg',
			cost: {
				rp: 520,
				orangeEssence: 220,
			},
		},
		{
			type: 'Skin',
			id: 32005,
			name: 'Amumu Quase-Rei do Baile',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin05/images/amumu_splash_tile_5.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin05/amumuloadscreen_5.jpg',
			cost: {
				rp: 520,
				orangeEssence: 220,
			},
		},
		{
			type: 'Skin',
			id: 32006,
			name: 'Amumu, o Minicavaleiro',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin06/images/amumu_splash_tile_6.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin06/amumuloadscreen_6.jpg',
			cost: {
				rp: 750,
				orangeEssence: 450,
			},
		},
		{
			type: 'Skin',
			id: 32007,
			name: 'Amumu, o Robozinho Triste',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin07/images/amumu_splash_tile_7.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin07/amumuloadscreen_7.jpg',
			cost: {
				rp: 1350,
				orangeEssence: 1050,
			},
		},
		{
			type: 'Skin',
			id: 32008,
			name: 'Amumu Festa Surpresa',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin08/images/amumu_splash_tile_8.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin08/amumuloadscreen_8.jpg',
			cost: {
				rp: 1350,
				orangeEssence: 1050,
			},
		},
		{
			type: 'Skin',
			id: 32017,
			name: 'Amumu Infernal',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin17/images/amumu_splash_tile_17.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin17/amumuloadscreen_17.jpg',
			cost: {
				rp: 1350,
				orangeEssence: 1050,
			},
		},
		{
			type: 'Skin',
			id: 32024,
			name: 'Amumu Príncipe Abóbora',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin24/images/amumu_splash_tile_24.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin24/amumuloadscreen_24.jpg',
			cost: {
				rp: 1350,
				orangeEssence: 1050,
			},
		},
		{
			type: 'Skin',
			id: 32034,
			name: 'Amumu de Porcelana',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin34/images/amumu_splash_tile_34.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin34/amumuloadscreen_34.jpg',
			cost: {
				rp: 1350,
				orangeEssence: 1050,
			},
		},
		{
			type: 'Skin',
			id: 32044,
			name: 'Amumu Coração Despedaçado',
			tilePath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin44/images/amumu_splash_tile_44.jpg',
			loadScreenPath:
				'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/skin44/amumuloadscreen_44.jpg',
			cost: {
				rp: 1350,
				orangeEssence: 1050,
			},
		},
	],
};

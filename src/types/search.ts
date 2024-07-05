import { IChampion, ISkin } from '@/actions/champions-skins-get';

// remove
export type IChampionList = Omit<IChampion, 'tilePath' | 'cost'> & {
	id: string;
};

export type ISeachSelect = (IChampion | ISkin) & {
	selected: boolean;
};

export type ISearchFilter = IChampionList & {
	selected?: boolean;
};

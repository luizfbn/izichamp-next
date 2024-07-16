import { IChampionList } from '@/actions/champions-get';
import { IChampion, ISkin } from '@/actions/champions-skins-get';

export type ISeachSelect = (IChampion | ISkin) & {
	selected: boolean;
};

export type ISearchFilter = IChampionList & {
	selected?: boolean;
};

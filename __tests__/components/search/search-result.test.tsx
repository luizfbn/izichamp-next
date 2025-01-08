import { fireEvent, render, screen, within } from '@testing-library/react';
import { ChampionsAndSkins } from '../../../__mocks__/champions-skins';
import { resetItem } from '@/components/cart/cart';
import SearchResult from '@/components/search/search-result';

const searchList = ChampionsAndSkins.map((item) => resetItem(item));

describe('<SearchResult />', () => {
	it('renders search result list', () => {
		const onClick = jest.fn();
		render(
			<SearchResult
				list={searchList}
				inputValue='Amumu'
				onClickItem={onClick}
			/>
		);

		const ul = screen.getByRole('list');

		expect(ul).toBeInTheDocument();
	});
	it('renders any result', () => {
		const onClick = jest.fn();
		render(
			<SearchResult
				list={searchList}
				inputValue='Amumu'
				onClickItem={onClick}
			/>
		);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];

		expect(li).toHaveClass('resultItem');
	});
	it('renders no result', () => {
		const onClick = jest.fn();
		render(<SearchResult list={[]} inputValue='Amumu' onClickItem={onClick} />);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];

		expect(li).toHaveClass('resultNotFound');
	});
	it('fires on click function', () => {
		const onClick = jest.fn();
		render(
			<SearchResult
				list={searchList}
				inputValue='Amumu'
				onClickItem={onClick}
			/>
		);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];

		fireEvent.click(li);

		expect(onClick).toHaveBeenCalled();
	});
});

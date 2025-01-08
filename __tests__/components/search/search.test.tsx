import { fireEvent, render, screen, within } from '@testing-library/react';
import { ChampionsAndSkins } from '../../../__mocks__/champions-skins';
import { resetItem } from '@/components/cart/cart';
import Search from '@/components/search/search';

const searchList = ChampionsAndSkins.map((item) => resetItem(item));

describe('<Search />', () => {
	it('renders any result when input a value', () => {
		const setState = jest.fn();
		render(<Search list={searchList} setResponseList={setState} />);

		const input = screen.getByRole('textbox');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'Amumu' } });

		const ul = screen.getByRole('list');
		expect(ul).toBeInTheDocument();
	});
	it('removes from list when selected', () => {
		const setState = jest.fn();
		render(<Search list={searchList} setResponseList={setState} />);

		const input = screen.getByRole('textbox');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'Amumu' } });

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];

		fireEvent.click(li);

		expect(li).not.toBeInTheDocument();
	});
	it('hides results when click outside', () => {
		const setState = jest.fn();
		render(<Search list={searchList} setResponseList={setState} />);

		const input = screen.getByRole('textbox');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'Amumu' } });

		const ul = screen.getByRole('list');
		fireEvent.click(document);

		expect(ul).not.toBeInTheDocument();
	});
});

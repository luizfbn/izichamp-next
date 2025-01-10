import { render, screen, within } from '@testing-library/react';
import { ChampionsAndSkins } from '../../../__mocks__/champions-skins';
import Cart, { resetItem } from '@/components/cart/cart';

const list = ChampionsAndSkins.map((item) => resetItem(item));

describe('<Cart />', () => {
	it('renders cart items', () => {
		const setState = jest.fn();
		render(<Cart list={list} setList={setState} setSearchList={setState} />);

		const ul = screen.getAllByRole('list')[0];
		const li = within(ul).getAllByRole('listitem');

		expect(li).toHaveLength(list.length);
	});
});

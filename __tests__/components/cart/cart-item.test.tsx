import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ChampionsAndSkins } from '../../../__mocks__/champions-skins';
import { resetItem } from '@/components/cart/cart';
import CartItem from '@/components/cart/cart-item';

const list = ChampionsAndSkins.map((item) => resetItem(item));

describe('<CartItem />', () => {
	it('renders headings', () => {
		const setState = jest.fn();
		const onDelete = jest.fn();
		render(<CartItem item={list[0]} setList={setState} onDelete={onDelete} />);

		const h2 = screen.getByRole('heading', { level: 2, name: list[0].name });
		expect(h2).toBeInTheDocument();

		if (list[0].type === 'Champion') {
			const h4 = screen.getByRole('heading', { level: 4, name: list[0].title });
			expect(h4).toBeInTheDocument();
		}
	});
	it('fires on delete function', async () => {
		const setState = jest.fn();
		const onDelete = jest.fn();
		render(<CartItem item={list[0]} setList={setState} onDelete={onDelete} />);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		await waitFor(() => expect(onDelete).toHaveBeenCalled());
	});
});

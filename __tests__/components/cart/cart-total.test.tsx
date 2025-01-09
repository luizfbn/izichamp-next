import { fireEvent, render, screen, within } from '@testing-library/react';
import { ChampionsAndSkins } from '../../../__mocks__/champions-skins';
import { resetItem } from '@/components/cart/cart';
import CartTotal from '@/components/cart/cart-total';

const list = ChampionsAndSkins.map((item) => resetItem(item));

describe('<CartTotal />', () => {
	it('renders heading 3', () => {
		const onDelete = jest.fn();
		render(<CartTotal list={list} onDelete={onDelete} />);

		const h3 = screen.getByRole('heading', { level: 3 });

		expect(h3).toBeInTheDocument();
	});
	it('renders list items', () => {
		const onDelete = jest.fn();
		render(<CartTotal list={list} onDelete={onDelete} />);

		const ul = screen.getByRole('list');
		const lis = within(ul).getAllByRole('listitem');

		expect(lis).toHaveLength(3);
	});
	it('renders blue essence value', () => {
		const onDelete = jest.fn();
		const totalBe = list.reduce(
			(acc, currentValue) => acc + currentValue.discountBE.newPrice,
			0
		);
		render(<CartTotal list={list} onDelete={onDelete} />);

		const blueEssenceValue = screen.getByText(totalBe);

		expect(blueEssenceValue).toBeInTheDocument();
	});
	it('renders riot points value', () => {
		const onDelete = jest.fn();
		const totalRp = list.reduce(
			(acc, currentValue) => acc + currentValue.discountRP.newPrice,
			0
		);
		render(<CartTotal list={list} onDelete={onDelete} />);

		const riotPointsValue = screen.getByText(totalRp);

		expect(riotPointsValue).toBeInTheDocument();
	});
	it('renders orange essence value', () => {
		const onDelete = jest.fn();
		const totalOe = list.reduce(
			(acc, currentValue) =>
				currentValue.type === 'Skin'
					? acc + currentValue.cost.orangeEssence
					: acc,
			0
		);
		render(<CartTotal list={list} onDelete={onDelete} />);

		const orangeEssenceValue = screen.getByText(totalOe);

		expect(orangeEssenceValue).toBeInTheDocument();
	});
	it('fires on delete function', () => {
		const onDelete = jest.fn();
		render(<CartTotal list={list} onDelete={onDelete} />);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(onDelete).toHaveBeenCalled();
	});
});

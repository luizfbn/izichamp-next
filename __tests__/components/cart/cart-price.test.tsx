import { fireEvent, render, screen } from '@testing-library/react';
import CartPrice from '@/components/cart/cart-price';

describe('<CartPrice />', () => {
	it('renders price value', () => {
		const value = 500;
		render(<CartPrice icon={<div></div>} value={value} onClick={jest.fn()} />);

		const h3 = screen.getByRole('heading', {
			level: 3,
			name: value.toString(),
		});

		expect(h3).toBeInTheDocument();
	});
	it('renders old price value', () => {
		const oldValue = 500;
		render(
			<CartPrice
				icon={<div></div>}
				value={oldValue - 100}
				oldValue={oldValue}
				disabled={true}
				onClick={jest.fn()}
			/>
		);

		const h4 = screen.getByRole('heading', {
			level: 4,
			name: oldValue.toString(),
		});

		expect(h4).toBeInTheDocument();
	});
	it('fires prices on click function', () => {
		const onClick = jest.fn();
		render(<CartPrice icon={<div></div>} value={500} onClick={onClick} />);

		const content = screen.getByTestId('price-content');

		fireEvent.click(content);

		expect(onClick).toHaveBeenCalled();
	});
});

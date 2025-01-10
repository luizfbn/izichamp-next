import { fireEvent, render, screen } from '@testing-library/react';
import CartPrice from '@/components/cart/cart-price';

describe('<CartPrice />', () => {
	it('renders price value', () => {
		const value = 500;
		render(
			<CartPrice
				icon={<div></div>}
				price={{
					value: value,
					onClick: jest.fn(),
				}}
			/>
		);

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
				price={{
					value: oldValue - 100,
					oldValue: oldValue,
					disabled: true,
					onClick: jest.fn(),
				}}
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
		render(
			<CartPrice
				icon={<div></div>}
				price={{
					value: 500,
					onClick: onClick,
				}}
			/>
		);

		const content = screen.getByTestId('price-content');

		fireEvent.click(content);

		expect(onClick).toHaveBeenCalled();
	});
	it('renders checkbox', () => {
		render(
			<CartPrice
				icon={<div></div>}
				price={{
					value: 500,
					onClick: jest.fn(),
				}}
				checkbox={{
					id: 'rp',
					checked: false,
					icon: <div></div>,
					onChange: jest.fn(),
				}}
			/>
		);

		const checkbox = screen.getByRole('checkbox');

		expect(checkbox).toBeInTheDocument();
	});
	it('fires checkboxs on change function', () => {
		const onChange = jest.fn();
		render(
			<CartPrice
				icon={<div></div>}
				price={{
					value: 500,
					onClick: jest.fn(),
				}}
				checkbox={{
					id: 'rp',
					checked: false,
					icon: <div></div>,
					onChange: onChange,
				}}
			/>
		);

		const checkbox = screen.getByRole('checkbox');

		fireEvent.click(checkbox);

		expect(onChange).toHaveBeenCalled();
	});
	it('renders input number', () => {
		render(
			<CartPrice
				icon={<div></div>}
				price={{
					value: 500,
					onClick: jest.fn(),
				}}
				inputNumber={{
					value: 50,
					range: {
						min: '0',
						max: '100',
					},
					onChange: jest.fn(),
				}}
			/>
		);

		const input = screen.getByRole('spinbutton');

		expect(input).toBeInTheDocument();
	});
	it('fires input numbers on change function', () => {
		const onChange = jest.fn();
		render(
			<CartPrice
				icon={<div></div>}
				price={{
					value: 500,
					onClick: jest.fn(),
				}}
				inputNumber={{
					value: 0,
					onChange: onChange,
				}}
			/>
		);

		const input = screen.getByRole('spinbutton');

		fireEvent.change(input, { target: { value: 50 } });

		expect(onChange).toHaveBeenCalled();
	});
});

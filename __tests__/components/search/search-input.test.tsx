import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '@/components/search/search-input';

describe('<SearchInput />', () => {
	it('displays input value', () => {
		render(<SearchInput type='text' />);

		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: '123' } });

		expect(input).toHaveDisplayValue('123');
	});
	it('fires on change function', () => {
		const onChange = jest.fn();
		render(<SearchInput type='text' onChange={onChange} />);

		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: '1' } });

		expect(onChange).toHaveBeenCalled();
	});
	it('renders search icon', () => {
		render(<SearchInput type='text' />);

		const icon = screen.getByAltText('Search');

		expect(icon).toBeInTheDocument();
	});
});

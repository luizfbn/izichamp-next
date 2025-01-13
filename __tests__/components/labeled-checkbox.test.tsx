import { fireEvent, render, screen } from '@testing-library/react';
import LabeledCheckbox from '@/components/labeled-checkbox/labeled-checkbox';

describe('<LabeledCheckbox />', () => {
	it('renders checkbox', () => {
		render(<LabeledCheckbox id={'rp'} label={''} />);

		const checkbox = screen.getByRole('checkbox');

		expect(checkbox).toBeInTheDocument();
	});
	it('renders label', () => {
		const labelContent = 'Test';
		render(<LabeledCheckbox id={'rp'} label={labelContent} />);

		const label = screen.getByLabelText(labelContent);

		expect(label).toBeInTheDocument();
	});
	it('fires on change function', () => {
		const onChange = jest.fn();
		render(
			<LabeledCheckbox
				id={'rp'}
				label={''}
				checked={false}
				onChange={onChange}
			/>
		);

		const checkbox = screen.getByRole('checkbox');

		fireEvent.click(checkbox);

		expect(onChange).toHaveBeenCalled();
	});
});

import { fireEvent, render, screen } from '@testing-library/react';
import { Champion } from '../../__mocks__/champion';
import ShowMore from '@/components/helper/show-more';

describe('<ShowMore />', () => {
	it('renders collapsed text', () => {
		const text = Champion.spells[0].description;
		const length = 20;
		render(<ShowMore text={text} length={length} />);

		const collapsedText = `${text.substring(0, length)}...`;
		const span = screen.getByText(collapsedText);

		expect(span).toBeInTheDocument();
	});
	it('renders uncollapsed text', () => {
		const text = Champion.spells[0].description;
		const length = 200;
		render(<ShowMore text={text} length={length} />);

		const uncollapsedText = screen.getByText(text);

		expect(uncollapsedText).toBeInTheDocument();
	});
	it('uncollapse text on click button', () => {
		const text = Champion.spells[0].description;
		const length = 20;
		render(<ShowMore text={text} length={length} />);

		const collapsedText = `${text.substring(0, length)}...`;
		const span = screen.getByText(collapsedText);
		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(span.innerHTML.length === text.length).toBeTruthy();
	});
	it('collapse text on click button', () => {
		const text = Champion.spells[0].description;
		const length = 20;
		render(<ShowMore text={text} length={length} />);

		const collapsedText = `${text.substring(0, length)}...`;
		const span = screen.getByText(collapsedText);
		const button = screen.getByRole('button');

		fireEvent.doubleClick(button);

		expect(span.innerHTML.length === collapsedText.length).toBeTruthy();
	});
});

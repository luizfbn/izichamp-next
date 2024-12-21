import { fireEvent, render, screen } from '@testing-library/react';
import { Champion } from '../../__mocks__/champion';
import Slide from '@/components/slide/slide';

const Children = Champion.skins.map((skin) => (
	<div key={skin.id} style={{ width: '200px', height: '360px' }}>
		{skin.name}
	</div>
));

describe('<Slide />', () => {
	it('slides content on next button click', () => {
		render(<Slide>{Children}</Slide>);

		const content = screen.getByTestId('slide-content');
		content.getBoundingClientRect = jest.fn(() => ({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			width: 200,
			height: 0,
			x: 0,
			y: 0,
			toJSON: () => {},
		}));
		const nextButton = screen.getAllByRole('button')[1];

		fireEvent.click(nextButton);

		expect(content.scrollLeft).toBe(200);
	});
	it('slides content on prev button click', () => {
		render(<Slide>{Children}</Slide>);

		const content = screen.getByTestId('slide-content');
		content.getBoundingClientRect = jest.fn(() => ({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			width: 200,
			height: 0,
			x: 0,
			y: 0,
			toJSON: () => {},
		}));
		content.scrollLeft = 400;
		const prevButton = screen.getAllByRole('button')[0];

		fireEvent.click(prevButton);

		expect(content.scrollLeft).toBe(200);
	});
});

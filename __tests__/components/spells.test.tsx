import { fireEvent, render, screen, within } from '@testing-library/react';
import { Champion } from '../../__mocks__/champion';
import Spells from '@/components/spells/spells';

describe('<Spells />', () => {
	it('renders spell list', () => {
		render(<Spells spells={Champion.spells} />);

		const ul = screen.getByRole('list');

		expect(ul).toBeInTheDocument();
	});
	it('first spell active', () => {
		render(<Spells spells={Champion.spells} />);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];

		expect(li).toHaveClass('active');
	});
	it('active spell on click', () => {
		render(<Spells spells={Champion.spells} />);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[1];

		fireEvent.click(li);

		expect(li).toHaveClass('active');
	});
	it('renders spell image', () => {
		render(<Spells spells={Champion.spells} />);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];
		const img = within(li).getByAltText(Champion.spells[0].name);

		expect(img).toBeInTheDocument();
	});
	it('renders spell key', () => {
		render(<Spells spells={Champion.spells} />);

		const ul = screen.getByRole('list');
		const li = within(ul).getAllByRole('listitem')[0];
		const h4 = within(li).getByRole('heading', {
			level: 4,
			name: Champion.spells[0].spellKey,
		});

		expect(h4).toBeInTheDocument();
	});
	it('renders spell name heading', () => {
		render(<Spells spells={Champion.spells} />);

		const h3 = screen.getByRole('heading', {
			level: 3,
			name: Champion.spells[0].name,
		});

		expect(h3).toBeInTheDocument();
	});
});

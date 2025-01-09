import { render, screen, within } from '@testing-library/react';
import { Champion } from '../../__mocks__/champion';
import SlideSkins from '@/components/slide/slide-skins';

describe('<SlideSkins />', () => {
	it('renders heading 3', () => {
		render(<SlideSkins skins={Champion.skins} />);

		const h3 = screen.getAllByRole('heading', { level: 3 })[0];

		expect(h3).toHaveTextContent(Champion.skins[0].name);
	});
	it('renders riot points info', () => {
		render(<SlideSkins skins={Champion.skins} />);

		const ul = screen.getAllByRole('list')[0];
		const li = within(ul).getAllByRole('listitem')[0];

		const icon = within(li).getByAltText('Riot points');
		const price = within(li).getByRole('heading', { level: 4 });

		expect(icon).toBeInTheDocument();
		expect(price).toHaveTextContent(`${Champion.skins[0].cost.rp}`);
	});
	it('renders orange essence info', () => {
		render(<SlideSkins skins={Champion.skins} />);

		const ul = screen.getAllByRole('list')[0];
		const li = within(ul).getAllByRole('listitem')[1];

		const icon = within(li).getByAltText('Orange essence');
		const price = within(li).getByRole('heading', { level: 4 });

		expect(icon).toBeInTheDocument();
		expect(price).toHaveTextContent(`${Champion.skins[0].cost.orangeEssence}`);
	});
});

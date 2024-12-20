import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import championsSkinsGet from '@/actions/champions-skins-get';

jest.mock('../../src/actions/champions-skins-get');

describe('Home', () => {
	it('renders heading 1', async () => {
		(championsSkinsGet as jest.Mock).mockReturnValue({
			data: null,
			ok: true,
			error: '',
		});
		const HomeComponent = await Home();
		render(HomeComponent);

		const h1 = screen.getByRole('heading', {
			level: 1,
			name: 'Planeje e compre',
		});

		expect(h1).toBeInTheDocument();
	});

	it('renders heading 2', async () => {
		(championsSkinsGet as jest.Mock).mockReturnValue({
			data: null,
			ok: true,
			error: '',
		});
		const HomeComponent = await Home();
		render(HomeComponent);

		const h2 = screen.getByRole('heading', {
			level: 2,
			name: 'Simule um carrinho de compras para ver se os campeões e skins cabem no seu bolso',
		});

		expect(h2).toBeInTheDocument();
	});
});

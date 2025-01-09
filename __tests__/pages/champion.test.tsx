import { render, screen } from '@testing-library/react';
import { Champion } from '../../__mocks__/champion';
import ChampionPage, { generateMetadata } from '@/app/champions/[id]/page';
import championGet from '@/actions/champion-get';
import * as nextNavigation from 'next/navigation';

jest.mock('next/navigation', () => ({ notFound: jest.fn() }));
jest.mock('../../src/actions/champion-get');

describe('Champion', () => {
	it('renders champion image', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: Champion,
			ok: true,
			error: '',
		});
		const ChampionComponent = await ChampionPage({ params: { id: 'Amumu' } });
		render(ChampionComponent);

		const img = screen.getByAltText('Amumu');

		expect(img).toBeInTheDocument();
	});
	it('renders champions name heading', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: Champion,
			ok: true,
			error: '',
		});
		const ChampionComponent = await ChampionPage({ params: { id: 'Amumu' } });
		render(ChampionComponent);

		const h1 = screen.getByRole('heading', {
			level: 1,
			name: 'Amumu',
		});

		expect(h1).toBeInTheDocument();
	});
	it('renders champions description heading', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: Champion,
			ok: true,
			error: '',
		});
		const ChampionComponent = await ChampionPage({ params: { id: 'Amumu' } });
		render(ChampionComponent);

		const h3 = screen.getByRole('heading', {
			level: 3,
			name: 'a Múmia Triste',
		});

		expect(h3).toBeInTheDocument();
	});
	it('renders remaining headers', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: Champion,
			ok: true,
			error: '',
		});
		const ChampionComponent = await ChampionPage({ params: { id: 'Amumu' } });
		render(ChampionComponent);

		const aboutHeading = screen.getByRole('heading', {
			level: 2,
			name: 'Sobre',
		});
		const habilitiesHeading = screen.getByRole('heading', {
			level: 2,
			name: 'Habilidades',
		});
		const skinsHeading = screen.getByRole('heading', {
			level: 2,
			name: 'Skins',
		});

		expect(aboutHeading).toBeInTheDocument();
		expect(habilitiesHeading).toBeInTheDocument();
		expect(skinsHeading).toBeInTheDocument();
	});
	it('calls notFound() when dont find a champion', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: null,
			ok: true,
			error: '',
		});
		const ChampionComponent = await ChampionPage({ params: { id: 'Amumu' } });
		render(ChampionComponent);

		expect(nextNavigation.notFound).toHaveBeenCalled();
	});
	it('renders page title with champion name', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: Champion,
			ok: true,
			error: '',
		});
		const title = (await generateMetadata({ params: { id: 'Amumu' } })).title;

		expect(title).toBe('Izi champ | ' + Champion.name);
	});
	it('renders page title without champion name', async () => {
		(championGet as jest.Mock).mockReturnValue({
			data: null,
			ok: true,
			error: '',
		});
		const title = (await generateMetadata({ params: { id: 'Amumu' } })).title;

		expect(title).toBe('Izi champ | Campeão');
	});
});

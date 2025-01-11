import { render, screen } from '@testing-library/react';
import CardChampion from '@/components/card/card-champion';

describe('<CardChampion />', () => {
	it('renders rp and blue essence values', () => {
		const rp = 200;
		const blueEssence = 100;
		render(<CardChampion rp={rp} blueEssence={blueEssence} />);

		const rpValue = screen.getByRole('heading', {
			level: 4,
			name: rp.toString(),
		});
		const beValue = screen.getByRole('heading', {
			level: 4,
			name: blueEssence.toString(),
		});

		expect(rpValue).toBeInTheDocument();
		expect(beValue).toBeInTheDocument();
	});
	it('renders icons', () => {
		render(<CardChampion rp={200} blueEssence={100} />);

		const rpIcon = screen.getByAltText('Riot points');
		const beIcon = screen.getByAltText('Blue essence');

		expect(rpIcon).toBeInTheDocument();
		expect(beIcon).toBeInTheDocument();
	});
});

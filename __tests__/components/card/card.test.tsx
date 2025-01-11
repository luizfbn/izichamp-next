import { render, screen, within } from '@testing-library/react';
import Card from '@/components/card/card';
import { Champion } from '../../../__mocks__/champion';

describe('<Card />', () => {
	it('renders card background image', () => {
		const image = Champion.skins[0].loadScreenPath;
		render(<Card image={Champion.skins[0].loadScreenPath} />);

		const card = screen.getByTestId('card');

		expect(card).toHaveStyle(
			`background-image: url(${image}), url(/assets/splash-loading.svg)`
		);
	});
	it('renders card hover style', () => {
		render(
			<Card image={Champion.skins[0].loadScreenPath} onHoverStyle={true} />
		);

		const card = screen.getByTestId('card');

		expect(card).toHaveClass('cardOnHover');
	});
	it('renders card size style', () => {
		const width = '200px';
		const height = '300px';
		render(
			<Card image={Champion.skins[0].loadScreenPath} size={{ width, height }} />
		);

		const card = screen.getByTestId('card');

		expect(card).toHaveStyle(`width: ${width}; height: ${height}`);
	});
	it('renders children', () => {
		const text = 'Hello';
		render(
			<Card image={Champion.skins[0].loadScreenPath}>
				<h1>{text}</h1>
			</Card>
		);

		const card = screen.getByTestId('card');
		const h1 = within(card).getByRole('heading', { level: 1, name: text });

		expect(h1).toBeInTheDocument();
	});
});

import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';

describe('Not found', () => {
	it('renders paragraph', () => {
		render(<NotFound />);

		const p = screen.getByRole('paragraph');

		expect(p).toBeInTheDocument();
	});
	it('renders image', () => {
		render(<NotFound />);

		const img = screen.getByAltText('Não encontrado');

		expect(img).toBeInTheDocument();
	});
});

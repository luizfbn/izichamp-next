import { fireEvent, render, screen } from '@testing-library/react';
import GlobalError from '@/app/global-error';

describe.skip('Loading', () => {
	const original = window.location;
	beforeAll(() => {
		Object.defineProperty(window, 'location', {
			configurable: true,
			value: { reload: jest.fn() },
		});
	});
	afterAll(() => {
		Object.defineProperty(window, 'location', {
			configurable: true,
			value: original,
		});
	});

	it('renders heading 1', () => {
		render(<GlobalError />);

		const h1 = screen.getByRole('heading', { level: 1 });

		expect(h1).toBeInTheDocument();
	});
	it('renders paragraph', () => {
		render(<GlobalError />);

		const p = screen.getByRole('paragraph');

		expect(p).toBeInTheDocument();
	});
	it('renders try again button', () => {
		render(<GlobalError />);

		const button = screen.getByRole('button', { name: 'Tentar novamente' });

		expect(button).toBeInTheDocument();
	});
	it('mocks reload function', () => {
		expect(jest.isMockFunction(window.location.reload)).toBe(true);
	});
	it('reloads window when button clicked', () => {
		render(<GlobalError />);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(window.location.reload).toHaveBeenCalled();
	});
});

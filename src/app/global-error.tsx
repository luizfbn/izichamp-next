'use client';

import './globals.css';
import { type_first, type_second } from '@/functions/fonts';

export default function GlobalError() {
	return (
		<html
			lang='pt-BR'
			className={`${type_first.variable} ${type_second.variable}`}
		>
			<body className='container animeTopBottom'>
				<h1 style={{ color: '#c3a758' }}>Um erro ocorreu</h1>
				<p style={{ color: '#f0e6d2' }}>
					O servidor pode ter tido alguma instabilidade e/ou está fora do ar.
				</p>
				<button
					style={{ marginTop: '1rem' }}
					className='button'
					onClick={() => window.location.reload()}
				>
					Tentar novamente
				</button>
			</body>
		</html>
	);
}

'use client';

import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div>
					<Link href={'/'} className={pathname === '/' ? 'active' : ''}>
						Home
					</Link>
				</div>
				<Image
					className={styles.logo}
					src={'/assets/logo.svg'}
					alt='IziChamp'
					width={114}
					height={95}
					priority
				/>
				<div>
					<Link
						href={'/champions'}
						className={pathname === '/champions' ? 'active' : ''}
					>
						Campeões
					</Link>
				</div>
			</nav>
		</header>
	);
}

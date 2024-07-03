import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default async function Header() {
	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<div>
					<Link href={'/'}>Home</Link>
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
					<Link href={'/champions'}>Campeões</Link>
				</div>
			</nav>
		</header>
	);
}

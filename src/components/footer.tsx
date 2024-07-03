import styles from './footer.module.css';

export default async function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				<span>izi champ</span> © Alguns direitos reservados.
			</p>
		</footer>
	);
}

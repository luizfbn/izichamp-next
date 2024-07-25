import styles from './footer.module.css';

export default async function Footer({ patch }: { patch: string | null }) {
	return (
		<footer className={styles.footer}>
			<p>
				<span>izi champ</span> © Alguns direitos reservados.
				{patch && <span className={styles.patch}>Patch {patch}</span>}
			</p>
		</footer>
	);
}

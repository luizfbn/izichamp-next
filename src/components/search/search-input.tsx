import styles from './search-input.module.css';
import Image from 'next/image';

export default function SearchInput({
	...props
}: React.ComponentProps<'input'>) {
	return (
		<div className={styles.inputWrapper}>
			<input {...props} />
			<div className={styles.inputIcon}>
				<Image src={'/assets/search.svg'} alt='Search' width={36} height={34} />
			</div>
		</div>
	);
}

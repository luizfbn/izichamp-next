import styles from './card.module.css';

type ICard = React.PropsWithChildren<{
	image: string;
	onHoverStyle?: boolean;
	size?: {
		width: string;
		height: string;
	};
}>;

export default function Card({ image, onHoverStyle, size, children }: ICard) {
	return (
		<div
			className={`${styles.card} ${onHoverStyle && styles.cardOnHover}`}
			style={{
				backgroundImage: `url(${image}), url(/assets/splash-loading.svg)`,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				...size,
			}}
			data-testid='card'
		>
			<div>{children}</div>
		</div>
	);
}

import styles from './cart-price.module.css';

type ICartPrice = {
	icon: React.ReactNode;
	value: number;
	oldValue?: number;
	disabled?: boolean;
	onClick: React.MouseEventHandler<HTMLParagraphElement>;
};

export default function CartPrice({
	icon,
	value,
	oldValue,
	disabled,
	onClick,
}: ICartPrice) {
	return (
		<div
			className={styles.priceTitle}
			onClick={onClick}
			data-testid='price-content'
		>
			{icon}
			<h3
				style={{
					color: disabled ? '#9c9c9c' : '#f7f7f7',
				}}
			>
				{value}
			</h3>
			{oldValue && <h4>{oldValue}</h4>}
		</div>
	);
}

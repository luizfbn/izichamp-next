import styles from './cart-price.module.css';

type ICartPrice = {
	icon: React.ReactNode;
	price: {
		value: number;
		oldValue?: number;
		disabled?: boolean;
		onClick: React.MouseEventHandler<HTMLParagraphElement>;
	};
	checkbox?: {
		id: string;
		checked: boolean;
		icon: any;
		onChange: React.ChangeEventHandler<HTMLInputElement>;
	};
	inputNumber?: {
		range?: {
			min: string;
			max: string;
		};
		value: number;
		onChange: React.ChangeEventHandler<HTMLInputElement>;
	};
};

export default function CartPrice({
	icon,
	price,
	checkbox,
	inputNumber,
}: ICartPrice) {
	return (
		<div className={styles.price}>
			<div
				className={styles.priceTitle}
				onClick={price.onClick}
				data-testid='price-content'
			>
				{icon}
				<h3
					style={{
						color: price.disabled ? '#9c9c9c' : '#f7f7f7',
					}}
				>
					{price.value}
				</h3>
				{price.oldValue && <h4>{price.oldValue}</h4>}
			</div>
			{(checkbox || inputNumber) && (
				<div className={styles.priceDiscount}>
					{checkbox && (
						<div className={styles.priceCheckbox}>
							<input
								type='checkbox'
								id={checkbox.id}
								data-testid={checkbox.id}
								checked={checkbox.checked}
								onChange={checkbox.onChange}
							/>
							<label htmlFor={checkbox.id}>{checkbox.icon}</label>
						</div>
					)}
					{inputNumber && (
						<input
							type='number'
							value={inputNumber.value}
							min={inputNumber.range ? inputNumber.range.min : '0'}
							max={inputNumber.range ? inputNumber.range.max : '100'}
							onChange={inputNumber.onChange}
						/>
					)}
				</div>
			)}
		</div>
	);
}

import { InputHTMLAttributes } from 'react';
import styles from './labeled-checkbox.module.css';

type ILabeledCheckbox = {
	id: string;
	label: any;
	title?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export default function LabeledCheckbox({
	id,
	label,
	title,
	...props
}: ILabeledCheckbox) {
	return (
		<div className={styles.labeledCheckbox}>
			<input type='checkbox' id={id} {...props} />
			<label htmlFor={id} title={title}>
				{label}
			</label>
		</div>
	);
}

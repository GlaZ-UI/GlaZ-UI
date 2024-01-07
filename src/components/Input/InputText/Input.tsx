import { FC } from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './Input.module.scss';

type inputVariants = 'default';
type inputStatuses = 'default' | 'error' | 'warning' | 'success';

interface BaseInputProps {
	variant?: inputVariants;
	status?: inputStatuses;
	required?: boolean;
	disabled?: boolean;
	label?: string;
}

type MergedHTMLAttributes = Omit<
	React.HTMLAttributes<HTMLElement> & React.InputHTMLAttributes<HTMLElement>,
	'type'
>;

interface IInputProps extends BaseInputProps, MergedHTMLAttributes {}

const Input: FC<IInputProps> = ({
	variant = 'default',
	status = 'default',
	disabled = false,
	required = false,
	label = '',
	className,
	...rest
}) => {
	const variants: Record<inputVariants, string> = {
		default: styles.variantDefault,
	};

	const statuses: Record<inputStatuses, string> = {
		default: styles.statusDefault,
		error: styles.statusError,
		warning: styles.statusWarning,
		success: styles.statusSuccess,
	};

	return (
		<div
			className={classNames(styles.inputWrapper, {}, [variants[variant]])}
		>
			<input
				className={classNames(styles.input, {}, [
					required ? styles.inputRequired : '',
					disabled ? styles.inputDisabled : '',
					statuses[status],
					className || '',
				])}
				{...rest}
			/>
			{(label || required) && (
				<p className={classNames(styles.inputLabel, {}, [])}>
					{required && <span className={styles.requiredDot}>*</span>}
					{label}
				</p>
			)}
		</div>
	);
};

export default Input;

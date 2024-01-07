import { FC } from 'react';
import styles from './CheckBox.module.scss';
import { classNames } from '../../../utils/classNames';

interface BaseCheckBoxProps {
	disabled?: boolean;
	label?: string;
}

type MergedHTMLAttributes = Omit<
	React.HTMLAttributes<HTMLElement> & React.InputHTMLAttributes<HTMLElement>,
	'type'
>;

interface ICheckBoxProps extends BaseCheckBoxProps, MergedHTMLAttributes {}

const CheckBox: FC<ICheckBoxProps> = ({
	label = '',
	disabled = false,
	id,
	...rest
}) => {
	return (
		<div className={styles.CheckBox}>
			<input
				type="checkbox"
				className={classNames(styles.checkBox, {}, [
					disabled ? styles.checkBoxDisabled : '',
				])}
				id={id}
				{...rest}
			/>
			{label && <div className={styles.checkBoxLabel}>{label}</div>}
		</div>
	);
};

export default CheckBox;

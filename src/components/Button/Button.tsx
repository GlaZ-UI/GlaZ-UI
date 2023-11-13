import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { classNames } from '../../utils/classNames';
import { VscLoading } from 'react-icons/vsc';
import {
	ButtonShapes,
	ButtonSizes,
	ButtonTypes,
	ButtonWaves,
} from './Button.types';

interface BaseButtonProps {
	type?: ButtonTypes;
	size?: ButtonSizes;
	disabled?: boolean;
	loading?: boolean;
	shape?: ButtonShapes;
	wave?: ButtonWaves;
	htmlType?: HTMLButtonElement['type'];
	href?: string;
}

type MergedHTMLAttributes = Omit<
	React.HTMLAttributes<HTMLElement> &
		React.ButtonHTMLAttributes<HTMLElement> &
		React.AnchorHTMLAttributes<HTMLElement>,
	'type'
>;

interface IButtonProps extends BaseButtonProps, MergedHTMLAttributes {}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
	type = 'primary',
	size = 'medium',
	disabled = false,
	htmlType = 'button',
	loading = false,
	shape = 'smooth',
	wave = 'hover',
	href,
	children,
	className,
	...rest
}) => {
	const buttonStyles: Record<ButtonTypes, string> = {
		filled: styles.buttonTypeFilled,
		primary: styles.buttonTypePrimary,
		outlined: styles.buttonTypeOutlined,
		text: styles.buttonTypeText,
		link: styles.buttonTypeLink,
	};

	const buttonSizes: Record<ButtonSizes, string> = {
		small: styles.buttonSizeSmall,
		medium: styles.buttonSizeMedium,
		large: styles.buttonSizeLarge,
	};

	const buttonShapes: Record<ButtonShapes, string> = {
		smooth: styles.buttonShapeSmooth,
		circle: styles.buttonShapeCircle,
	};

	const buttonWaves: Record<ButtonWaves, string> = {
		hover: styles.buttonWavesHover,
		active: styles.buttonWavesActive,
		permanent: styles.buttonWavesPermanent,
		none: styles.buttonWavesNone,
	};
	if (type === 'link') {
		return (
			<a
				href={href}
				className={classNames(styles.Button, {}, [
					buttonStyles[type],
					buttonSizes[size],
					disabled ? styles.buttonDisabled : '',
					className ? className : '',
				])}
			>
				<div className={styles.contentBox}>
					{loading ? (
						<div className={styles.loadingIcon}>
							<VscLoading />
						</div>
					) : (
						<></>
					)}
					{children}
				</div>
			</a>
		);
	}

	return (
		<button
			type={htmlType}
			className={classNames(styles.Button, {}, [
				buttonStyles[type],
				buttonSizes[size],
				buttonShapes[shape],
				buttonWaves[wave],
				disabled ? styles.buttonDisabled : '',
				className ? className : '',
			])}
			{...rest}
		>
			<span className={styles.flare} />
			<div className={styles.contentBox}>
				{loading ? (
					<div className={styles.loadingIcon}>
						<VscLoading />
					</div>
				) : (
					<></>
				)}
				{children}
			</div>
		</button>
	);
};

export default Button;

import { FC, PropsWithChildren } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { classNames } from '../../utils/classNames';
import styles from './Button.module.scss';
import {
	ButtonShapes,
	ButtonSizes,
	ButtonTypes,
	ButtonWaves,
} from './Button.types';

interface BaseButtonProps {
	/**
	 * @param {ButtonTypes} type - Определяет тип кнопки, который влияет на ее цвет и стиль. По умолчанию равен 'primary'.
	 * @param {ButtonTypes} type - Determines the type of the button, which affects its color and style. Defaults to 'primary'.
	 */
	type?: ButtonTypes;
	/**
	 * @param {ButtonSizes} size - Определяет размер кнопки в пикселях. По умолчанию равен 'medium'.
	 * @param {ButtonSizes} size - Determines the size of the button in pixels. Defaults to 'medium'.
	 */
	size?: ButtonSizes;
	/**
	 * @param {boolean} disabled - Определяет, будет ли кнопка отключена и не реагировать на нажатия. По умолчанию равен false.
	 * @param {boolean} disabled - Determines whether the button will be disabled and not respond to clicks. Defaults to false.
	 */
	disabled?: boolean;
	/**
	 * @param {boolean} loading - Определяет, будет ли кнопка показывать индикатор загрузки и не реагировать на нажатия. По умолчанию равен false.
	 * @param {boolean} loading - Determines whether the button will show a loading indicator and not respond to clicks. Defaults to false.
	 */
	loading?: boolean;
	/**
	 * @param {ButtonShapes} shape - Определяет форму кнопки, которая влияет на ее радиус границы. По умолчанию равен 'smooth'.
	 * @param {ButtonShapes} shape - Determines the shape of the button, which affects its border radius. Defaults to 'smooth'.
	 */
	shape?: ButtonShapes;
	/**
	 * @param {ButtonWaves} wave - Определяет эффект волны, который будет происходить при наведении или нажатии на кнопку. По умолчанию равен 'hover'.
	 * @param {ButtonWaves} wave - Determines the wave effect that will occur when hovering or clicking on the button. Defaults to 'hover'.
	 */
	wave?: ButtonWaves;
	/**
	 * @param {HTMLButtonElement['type']} htmlType - Определяет тип HTML-атрибута кнопки, который влияет на ее поведение внутри формы. По умолчанию равен 'button'.
	 * @param {HTMLButtonElement['type']} htmlType - Determines the type of the HTML attribute of the button, which affects its behavior inside a form. Defaults to 'button'.
	 */
	htmlType?: HTMLButtonElement['type'];
	/**
	 * @param {string} href - Определяет URL-адрес, на который будет перенаправлен пользователь при нажатии на кнопку.
	 * @param {string} href - Determines the URL that the user will be redirected to when clicking on the button.
	 */
	href?: string;
}

type MergedHTMLAttributes = Omit<
	React.HTMLAttributes<HTMLElement> &
		React.ButtonHTMLAttributes<HTMLElement> &
		React.AnchorHTMLAttributes<HTMLElement>,
	'type'
>;

interface IButtonProps extends BaseButtonProps, MergedHTMLAttributes {}

/**
 * Компонент Button отображает кнопку, которая может быть нажата для выполнения какого-либо действия.
 * The Button component displays a button that can be clicked to perform some action.
 * @returns {JSX.Element} Компонент Button, который отображает кнопку с заданными пропсами.
 * @returns {JSX.Element} The Button component that displays the button with the given props.
 */
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
					{loading && (
						<div className={styles.loadingIcon}>
							<VscLoading />
						</div>
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

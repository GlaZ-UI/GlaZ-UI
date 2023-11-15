import { FC, PropsWithChildren } from 'react';
import { classNames } from '../../../utils/classNames';
import { BaseTypographyProps } from '../Types/BaseTypographyProps';
import { ParagraphFontSizes } from '../Types/TypographyTypes';
import styles from '../Typography.module.scss';
import { paragraphFontSizes, textStatuses } from '../utils/classes';

interface ITextProps extends BaseTypographyProps {
	/**
	 * @param {number} fontSize - Размер шрифта текста. Значения относятся к типу ParagraphFontSizes.
	 * @param {number} fontSize - The font size of the text. Values refer to ParagraphFontSizes type.
	 */
	fontSize?: ParagraphFontSizes;
}

/**
 * Компонент Text отображает текст с различными стилями и эффектами.
 * The Text component displays text with different styles and effects.
 * @returns {JSX.Element} Компонент Text, который отображает текст с заданными пропсами.
 * @returns {JSX.Element} The Text component that displays the text with the given props.
 */
const Text: FC<PropsWithChildren<ITextProps>> = ({
	children,
	fontSize,
	lineThrough = false,
	underline = false,
	overLine = false,
	status = 'default',
	fat = false,
}) => {
	return (
		<span
			style={{
				textDecoration: [
					lineThrough ? 'line-through' : '',
					underline ? 'underline' : '',
					overLine ? 'overline' : '',
				]
					.join(' ')
					.trim(),
			}}
			className={classNames(styles.Text, {}, [
				textStatuses[status],
				fontSize ? paragraphFontSizes[fontSize] : '',
				fat ? styles.textFat : '',
			])}
		>
			{children}
		</span>
	);
};

export default Text;

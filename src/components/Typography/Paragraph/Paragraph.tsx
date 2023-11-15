import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from '../Typography.module.scss';
import { classNames } from '../../../utils/classNames';
import { ParagraphFontSizes, ParagraphTypes } from '../Types/TypographyTypes';
import { paragraphFontSizes, paragraphTypes } from '../utils/classes';

interface IParagraphProps {
	/**
	 * @param {ParagraphTypes} type - Определяет тип абзаца, который влияет на его стиль и выравнивание. По умолчанию равен ‘default’.
	 * @param {ParagraphTypes} type - Determines the type of the paragraph, which affects its style and alignment. Defaults to ‘default’.
	 */
	type?: ParagraphTypes;
	/**
	 * @param {ParagraphFontSizes} fontSize - Определяет размер шрифта абзаца в пикселях. По умолчанию равен ‘medium’.
	 * @param {ParagraphFontSizes} fontSize - Determines the font size of the paragraph in pixels. Defaults to ‘medium’.
	 */
	fontSize?: ParagraphFontSizes;
	/**
	 * @param {CSSProperties} style - Определяет дополнительные стили CSS, которые будут применены к абзацу. По умолчанию равен пустому объекту.
	 * @param {CSSProperties} style - Determines the additional CSS styles that will be applied to the paragraph. Defaults to an empty object.
	 */
	style?: CSSProperties;
}
/**
 * Компонент Paragraph отображает абзац текста с различными типами и размерами шрифта.
 * The Paragraph component displays a paragraph of text with different types and sizes of font.
 * @returns {JSX.Element} Компонент Paragraph, который отображает абзац текста с заданными пропсами.
 * @returns {JSX.Element} The Paragraph component that displays the paragraph of text with the given props.
 */
const Paragraph: FC<PropsWithChildren<IParagraphProps>> = ({
	children,
	type = 'default',
	fontSize = 'medium',
	style = {},
}) => {
	return (
		<p
			style={style}
			className={classNames(styles.Paragraph, {}, [
				paragraphTypes[type],
				paragraphFontSizes[fontSize],
			])}
		>
			{children}
		</p>
	);
};

export default Paragraph;

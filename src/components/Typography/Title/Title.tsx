import { FC, PropsWithChildren } from 'react';
import styles from '../Typography.module.scss';
import { BaseTypographyProps } from '../Types/BaseTypographyProps';
import { classNames } from '../../../utils/classNames';
import { textStatuses, titleLevels } from '../utils/classes';
import { TitleLevels } from '../Types/TypographyTypes';

interface ITitleProps extends BaseTypographyProps {
	/**
	 * @param {TitleLevels} level - Определяет уровень заголовка.
	 * @param {TitleLevels} level - Determines title level.
	 */
	level?: TitleLevels;
}
/**
 * Компонент Title отображает заголовок с различными стилями и эффектами.
 * The Title component displays heading with different styles and effects.
 * @returns {JSX.Element} Компонент Title, который отображает заголовок с заданными пропсами.
 * @returns {JSX.Element} The Title component that displays the heading with the given props.
 */
const Title: FC<PropsWithChildren<ITitleProps>> = ({
	level = 1,
	children,
	lineThrough = false,
	underline = false,
	overLine = false,
	status = 'default',
}) => {
	const props = {
		style: {
			textDecoration: [
				lineThrough ? 'line-through' : '',
				underline ? 'underline' : '',
				overLine ? 'overline' : '',
			]
				.join(' ')
				.trim(),
		},
		className: classNames(styles.Title, {}, [
			textStatuses[status],
			titleLevels[level],
		]),
	};
	switch (level) {
		case 1:
			return <h1 {...props}>{children}</h1>;
		case 2:
			return <h2 {...props}>{children}</h2>;
		case 3:
			return <h3 {...props}>{children}</h3>;
		case 4:
			return <h4 {...props}>{children}</h4>;
		case 5:
			return <h5 {...props}>{children}</h5>;
		case 6:
			return <h6 {...props}>{children}</h6>;
		default:
			return;
	}
};

export default Title;

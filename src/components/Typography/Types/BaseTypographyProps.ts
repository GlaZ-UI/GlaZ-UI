import { TextStatuses } from './TypographyTypes';

export interface BaseTypographyProps {
	/**
	 * @param {boolean} lineThrough - Определяет, будет ли текст зачеркнутым. По умолчанию равен false.
	 * @param {boolean} lineThrough - Determines whether the text will be crossed out. Defaults to false.
	 */
	lineThrough?: boolean;
	/**
	 * @param {boolean} underline - Определяет, будет ли текст подчеркнутым. По умолчанию равен false.
	 * @param {boolean} underline - Determines whether the text will be underlined. Defaults to false.
	 */
	underline?: boolean;
	/**
	 * @param {boolean} overLine - Определяет, будет ли текст надчеркнутым. По умолчанию равен false.
	 * @param {boolean} overLine - Determines whether the text will be overlined. Defaults to false.
	 */
	overLine?: boolean;
	/**
	 * @param {'default' | 'success' | 'warning' | 'error' | 'info'} status - Определяет цвет текста в зависимости от статуса. По умолчанию равен 'default'. Значения относятся к типу TextStatuses.
	 * @param {'default' | 'success' | 'warning' | 'error' | 'info'} status - Determines the color of the text depending on the status. Defaults to 'default'. Values refer to TextStatuses type.
	 */
	status?: TextStatuses;
	/**
	 * @param {boolean} fat - Определяет, будет ли текст жирным. По умолчанию равен false.
	 * @param {boolean} fat - Determines whether the text will be bold. Defaults to false.
	 */
	fat?: boolean;
}

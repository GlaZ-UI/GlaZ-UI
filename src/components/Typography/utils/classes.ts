import {
	ParagraphFontSizes,
	ParagraphTypes,
	TextStatuses,
	TitleLevels,
} from '../Types/TypographyTypes';
import styles from '../Typography.module.scss';

export const textStatuses: Record<TextStatuses, string> = {
	default: styles.textStatusDefault,
	warning: styles.textStatusWarning,
	error: styles.textStatusError,
	info: styles.textStatusInfo,
	success: styles.textStatusSuccess,
};
export const paragraphFontSizes: Record<ParagraphFontSizes, string> = {
	small: styles.paragraphFontSizeSmall,
	medium: styles.paragraphFontSizeMedium,
	large: styles.paragraphFontSizeLarge,
};

export const paragraphTypes: Record<ParagraphTypes, string> = {
	default: styles.paragraphTypeDefault,
	code: styles.paragraphTypeCode,
};

export const titleLevels: Record<TitleLevels, string> = {
	1: styles.titleLevel1,
	2: styles.titleLevel2,
	3: styles.titleLevel3,
	4: styles.titleLevel4,
	5: styles.titleLevel5,
	6: styles.titleLevel6,
};

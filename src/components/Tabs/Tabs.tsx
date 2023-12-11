import { FC, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { ITab } from './types/ITab.interface';
import { classNames } from '../../utils/classNames';
import styles from './Tabs.module.scss';

interface ITabsProps {
	/**
	 * @param {ITab[]} tabs - Массив компонентов для отображения, а также их настроек.
	 * @param {ITab[]} tabs - Array of components to display and their settings.
	 */
	tabs: ITab[];
	/**
	 * @param {number} defaultValue - Индекс компонента в массиве, который будет показываться по умолчанию.
	 * @param {number} defaultValue - The index of the component in the array that will be shown by default.
	 */
	defaultValue?: number;
}
/**
 * Компонент Tabs отображает вкладки, позволяющие переключаться между компонентами/их содержимым.
 * The Tabs component displays tabs that allow you to switch between components/their contents.
 * @returns {JSX.Element} Компонент Tabs отображает вкладки, позволяющие переключаться между компонентами/их содержимым.
 * @returns {JSX.Element} The Tabs component displays tabs that allow you to switch between components/their contents.
 */
const Tabs: FC<ITabsProps> = ({ tabs, defaultValue = 0 }) => {
	if (tabs.length < defaultValue || defaultValue < 0) {
		defaultValue = 0;
		console.warn('[!] defaultValue in Tabs component is out of range');
	}
	const [currentTab, setTab] = useState<React.ReactNode>(
		tabs[defaultValue].component
	);

	return (
		<div className={styles.tabs}>
			<div className={styles.tabSelection}>
				{tabs.map((tab) => {
					return (
						<div
							key={tab.key}
							className={classNames(
								currentTab === tab.component
									? styles.tabActive
									: styles.tab,
								{},
								[
									tab.disabled ? styles.tabDisabled : '',
									tab.loading ? styles.tabLoading : '',
								]
							)}
							onClick={() => setTab(tab.component)}
						>
							{tab.loading && (
								<div className={styles.loadingIcon}>
									<VscLoading />
								</div>
							)}
							{tab.title}
						</div>
					);
				})}
			</div>
			{currentTab}
		</div>
	);
};

export default Tabs;

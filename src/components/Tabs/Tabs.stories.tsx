import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Tabs',
	component: Tabs,
	argTypes: {
		tabs: {
			defaultValue: [],
		},
		defaultValue: {
			defaultValue: 0,
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: () => (
		<Tabs
			tabs={[
				{ component: <></>, title: 'default', key: 'tab1' },
				{
					component: <></>,
					title: 'loading',
					key: 'tab2',
					loading: true,
				},
				{
					component: <></>,
					title: 'disabled',
					key: 'tab3',
					disabled: true,
				},
			]}
		/>
	),
};

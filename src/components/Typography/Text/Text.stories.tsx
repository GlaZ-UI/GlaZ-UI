import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
	title: 'Typography/Text',
	component: Text,
	argTypes: {
		fontSize: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' },
		},
		lineThrough: {
			options: [false, true],
			control: { type: 'boolean' },
		},
		underline: {
			options: [false, true],
			control: { type: 'boolean' },
		},
		overLine: {
			options: [false, true],
			control: { type: 'boolean' },
		},
		status: {
			options: ['success', 'warning', 'error', 'info', 'default'],
			control: { type: 'select' },
		},
		fat: {
			options: [false, true],
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	render: (args) => <Text {...args}>Text</Text>,
};

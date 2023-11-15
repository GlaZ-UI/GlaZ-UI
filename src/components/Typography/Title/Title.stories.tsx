import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
	title: 'Typography/Title',
	component: Title,
	argTypes: {
		level: {
			options: [1, 2, 3, 4, 5, 6],
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
	},
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
	render: (args) => <Title {...args}>Title</Title>,
};

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	argTypes: {
		type: {
			defaultValue: 'primary',
			options: ['primary', 'filled', 'outlined', 'text', 'link'],
			control: { type: 'select' },
		},
		size: {
			defaultValue: 'medium',
			options: ['small', 'medium', 'large'],
			control: { type: 'select' },
		},
		shape: {
			defaultValue: 'smooth',
			options: ['smooth', 'circle'],
			control: { type: 'select' },
		},
		wave: {
			defaultValue: 'hover',
			options: ['hover', 'active', 'permanent', 'none'],
			control: { type: 'select' },
		},
		loading: {
			defaultValue: false,
			options: [false, true],
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: (args) => <Button {...args}>Пошел нахуй!</Button>,
};

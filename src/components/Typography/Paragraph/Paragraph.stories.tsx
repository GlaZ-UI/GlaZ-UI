import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
	title: 'Typography/Paragraph',
	component: Paragraph,
	argTypes: {
		type: {
			options: ['default', 'code'],
			control: { type: 'select' },
		},
		fontSize: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
	render: (args) => (
		<Paragraph {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
			ultricies vulputate tellus, vitae vulputate metus sollicitudin
			vitae. Sed interdum eros eu turpis consectetur bibendum. Nam sed
			tincidunt leo. Etiam interdum nunc et velit vehicula ullamcorper.
			Orci varius natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus. Phasellus non erat a nisi cursus placerat id
			et nulla. Ut gravida porta consectetur.
		</Paragraph>
	),
};

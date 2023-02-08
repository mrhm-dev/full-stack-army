import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
	title: 'UI/atoms/Button',
	component: Button,
	args: {
		children: 'Button',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
	title: 'Primary Button',
};

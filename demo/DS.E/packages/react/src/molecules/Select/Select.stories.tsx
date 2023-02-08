import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
	title: 'UI/molecules/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Common = Template.bind({});
Common.args = {
	label: 'Select From The List',
	options: [
		{ label: 'Option A', value: 'Option A' },
		{ label: 'Option B', value: 'Option B' },
		{ label: 'Option C', value: 'Option C' },
	],
};

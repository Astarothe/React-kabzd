import React from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'Input',
  // component: input
}

const Template: Story = (args) => <input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Primary1 = Template.bind({});
Primary1.args = {
  primary: true,
  label: 'Button',
};


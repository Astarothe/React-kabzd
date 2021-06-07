import React, {useState} from 'react';
import { Story } from '@storybook/react';
import {OnOff, OnOffPropsType} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,

};

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;


export const emptyRating = Template.bind({});
emptyRating.args = {
    switchOn: true,
}

export const empty = Template.bind({});

emptyRating.args = {
    switchOn: true,
}


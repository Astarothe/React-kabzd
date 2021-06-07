import React, {useState} from 'react';
import { Story } from '@storybook/react';
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,

};

const Template: Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args} />;


export const emptyRating = Template.bind({});


export const empty = Template.bind({});



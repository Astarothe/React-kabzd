import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion, UncontrolledAccordionPropsType} from "./UncotontrolledAccordion";

export default {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion,
};

const callback = action("accordion mode change event fired");

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    titleValue: "Menu",

}

export const ModeChanding = () => {
    return <UncontrolledAccordion titleValue={"Users"}/>
}



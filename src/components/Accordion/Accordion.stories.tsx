import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    titleValue: "Menu",
    collapsed: true,
    setAccordionCollapsed: callback,
    onClick: onClickCallback
}

export const UsersUnCollapsedMode2 = Template.bind({});
UsersUnCollapsedMode2.args = {
    titleValue: "Menu",
    collapsed: false,
    setAccordionCollapsed: callback,
    onClick: onClickCallback
}

export const ModeChanding = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} setAccordionCollapsed={() => setValue(!value)} onClick={onClickCallback}/>
}



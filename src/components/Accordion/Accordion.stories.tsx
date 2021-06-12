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

const Template: Story<AccordionPropsType> = (args) => {

    return (
        <Accordion {...args} />
    )

}


export const MenuCollapsedModus = Template.bind({});

MenuCollapsedModus.args = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callback,
    items: [{title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}],
    onClick: (id) => {
        alert(`user with ID ${id} should be happy`)
    }
}

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    ...MenuCollapsedModus.args,
    collapsed: false
}


export const MenuCollapsedMode = () => <Accordion
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}/>


export const UsersUnCollapsedMode = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    items={[{title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}]
    }
    onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    const onChange = () => {
        setValue(!value)
    }
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={onChange}
                      items={[{title: "Dimych", value: 1},
                          {title: "Valera", value: 2},
                          {title: "Artem", value: 3},
                          {title: "Victor", value: 4}]
                      }
                      onClick={(value) => { alert(`user with ID ${value} should be happy`)}}/>
}



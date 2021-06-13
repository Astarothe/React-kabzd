import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select",
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => {
    return (
        <Select {...args} />
    )
}

export const WithValue = () => {
    const [value, setValue] = useState("2");
    const onChange = (val:string) => setValue(val)

    return (
        <Select onChange={onChange}
            value={value}
                items={[
                    {title: "Minsk", value: "1"},
                    {title: "Moscow", value: "2"},
                    {title: "Kiev", value: "3"},
                ]}/>
    )
};


export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    const onChange = (val:any ) => setValue(val)

    return (
        <Select onChange={onChange}
                value={value}
                items={[
                    {title: "Minsk", value: "1"},
                    {title: "Moscow", value: "2"},
                    {title: "Kiev", value: "3"},
                ]}/>
    )
}


// const Selected = Template.bind({});
//
// Selected.args = {
//     value:"fer",
//     onChange: (value) => {
//         console.log("hey")
//     },
//     items: [{title: "Dimych", value:1 }, {title: "Victor", value:2 }]
// }

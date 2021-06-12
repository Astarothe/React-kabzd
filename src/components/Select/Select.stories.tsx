import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";

export default {
    title: "Select",
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => {

    return (
        <Select {...args} />
    )
}

export const SelectedTwo = () => {
    const [title,setTitle] = useState("Dimych");
    const [on, setOn] = useState<boolean>(true)

    const massive = [{title: "Dimych", value:1 }, {title: "Victor", value:2 }]
    const onChangeHandler = (id: number) => {
        const name = massive.find(i => i.value === id);
        if(name){
            setTitle(name.title)
            setOn(!on)
        }
    }
    const onClickTitleHandler = () => {

    }

    return (
        <Select value={title} onChange={onChangeHandler} items={massive}  on={on} setOn={setOn}/>
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

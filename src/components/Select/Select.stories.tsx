import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";
import s from "./Select.module.css";

export default {
    title: "Select",
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => {
    return (
        <Select {...args} />
    )
}

// export const WithValue = () => {
//     const [value, setValue] = useState("2");
//     const onChange = (val: string) => setValue(val)
//
//     return (
//         <Select onChange={onChange}
//                 value={value}
//                 items={[
//                     {title: "Minsk", value: "1"},
//                     {title: "Moscow", value: "2"},
//                     {title: "Kiev", value: "3"},
//                 ]}/>
//     )
// };


// export const WithoutValue = () => {
//     const [value, setValue] = useState(null);
//     const onChange = (val: any) => setValue(val)
//
//     return (
//         <Select onChange={onChange}
//                 value={value}
//                 items={[
//                     {title: "Minsk", value: "1"},
//                     {title: "Moscow", value: "2"},
//                     {title: "Kiev", value: "3"},
//                 ]}/>
//     )
// }

export const Example = () => {

    const select = [
        {id: 1, filter: "string"},
        {id: 2, filter: "country"},
        {id: 3, filter: "count"},
    ]
    const [title, setTitle] = useState({
        [select[0].id]:
            [{title: "Minsk", value: "1", country: 1, count: 1000},
                {title: "Polotck", value: "2", country: 1, count: 100000},
                {title: "Novopolotck", value: "3", country: 1, count: 1000},
                {title: "Moscow", value: "4", country: 2, count: 1000},
                {title: "Kiev", value: "5", country: 2, count: 100000},
                {title: "Peterburg", value: "6", country: 2, count: 100000},
            ],
        [select[1].id]:
            [{title: "Minsk", value: "1", country: 1, count: 1000},
                {title: "Polotck", value: "2", country: 1, count: 100000},
                {title: "Novopolotck", value: "3", country: 1, count: 1000},
                {title: "Moscow", value: "4", country: 2, count: 1000},
                {title: "Kiev", value: "5", country: 2, count: 100000},
                {title: "Peterburg", value: "6", country: 2, count: 100000},
            ],
        [select[2].id]:
            [{title: "Minsk", value: "1", country: 1, count: 1000},
                {title: "Polotck", value: "2", country: 1, count: 100000},
                {title: "Novopolotck", value: "3", country: 1, count: 1000},
                {title: "Moscow", value: "4", country: 2, count: 1000},
                {title: "Kiev", value: "5", country: 2, count: 100000},
                {title: "Peterburg", value: "6", country: 2, count: 100000},
            ]
    })


    return (
        <div className={s.wrapper}>
            {select.map(t => {
                let newTitle = title[1];
                if (t.filter === "string") {
                    newTitle = title[t.id].filter(t => t.title.indexOf("o") > -1)
                    console.log(newTitle)
                }
                if (t.filter === "country") {
                    newTitle = title[t.id].filter(t => t.country < 2)
                }
                if (t.filter === "count") {
                    newTitle = title[t.id].filter(t => t.count > 1000)
                }

                return <Select
                    key={t.id}
                    items={newTitle}
                    filter={t.filter}/>
            })}


        </div>

    )
}

// <Select onChange={onChange}
//         value={value}
//         items={title}
//         filter={"country"}/>
// <Select onChange={onChange}
//         value={value}
//         items={title}
//         filter={"count"}/>
// const Selected = Template.bind({});
//
// Selected.args = {
//     value:"fer",
//     onChange: (value) => {
//         console.log("hey")
//     },
//     items: [{title: "Dimych", value:1 }, {title: "Victor", value:2 }]
// }

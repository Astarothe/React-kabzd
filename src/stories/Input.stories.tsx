import React, {ChangeEvent, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Inputs-new',
    // component: OnOff,

};

type Template = {
    value:string
}

const Template: Story<Template> = (args) => <input {...args} />;

export const Made: Story<Template> = (args) => {
    let [value,setValue] = useState("")

    return <div><input {...args} onChange={(e) => {
      const actualValue = e.currentTarget.value;
      setValue(actualValue)
    } } /> {value}</div>;
}

export const GetValueOfUncontrolledInputByButtonPress: Story<Template> = (args) => {
    let [value,setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}  {...args}  /> <button onClick={save}>save</button> - actual value: {value}</>;
}

export const ContolledInput = () => {
    const [parentValue, setParentValue] = useState("");

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ContolledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ContolledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2");

    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
        </select>
}

export let TrackValueOfUncontrolledInput = Template.bind({});


export let ControlledInputWithFixedValue = Template.bind({});

ControlledInputWithFixedValue.args = {
    value: "it-incubator"
}
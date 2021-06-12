import React, {FormEventHandler, useState} from "react";
import s from "./Select.module.css"

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => any
    items: ItemType[]
    on: boolean
    setOn: (bool: boolean) => void
}

export function Select(props: SelectPropsType) {


    return (
        <div>
            <div className={s.selectTitle} onClick={() => props.setOn(!props.on)}>
                {props.value}
            </div>
            {props.on && props.items.map(i => <div onClick={() => props.onChange(i.value)}>{i.title}</div>)}
        </div>
    )
}
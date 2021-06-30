import React, {FormEventHandler, useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

export type ItemType = {
    title: string
    value: string
    country: number
    count: number

}

export type SelectPropsType = {
    items: Array<ItemType>
    filter: string
}

export function Select(props: SelectPropsType) {
    const [value, setValue] = useState(null);
    const onChange = (val: any) => setValue(val)
    console.log(props.filter + " rendering")


    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState<string | null>(value);

    const selectorItem = props.items.find(i => i.value === value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);
    console.log(selectorItem)

    useEffect(() => (
        setHoveredElementValue(value)
    ), [value])

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectorItem) {
                onChange(props.items[0].value);
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div >
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}> {selectorItem && selectorItem.title} </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i =>{


                           return <div
                                onMouseEnter={() => setHoveredElementValue(i.value)}
                                className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                                key={i.value}
                                onClick={() => onItemClick(i.value)}>
                                {i.title}
                            </div>
                        })}
                    </div>
                }
            </div>
        </div>
    )
}
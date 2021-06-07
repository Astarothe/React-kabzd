import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    onClick: () => void
}

export function Accordion(props:AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed}/>
                { !props.collapsed  && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.setAccordionCollapsed()}>{props.title}</h3>
    )
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
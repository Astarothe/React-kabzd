import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UncontrolledAccordion(props:AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true);

        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
                <button >TOGGLE</button>
                { !collapsed  && <AccordionBody />}
            </div>
        )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
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
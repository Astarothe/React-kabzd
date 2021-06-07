import s from "./OnOff.module.css";
import {useState} from "react";

export type OnOffPropsType = {
    setSwitchOn: (value: boolean) => void
    switchOn: boolean
}

export function OnOff(props: OnOffPropsType) {

    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.switchOn ? "green" : "white"

    };
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.switchOn ? "red" : "white"
    };
    let indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.switchOn ? "green" : "red"
    };
    return (
        <div>
            <div style={onStyle} onClick={() => props.setSwitchOn(true)}>on</div>
            <div style={offStyle} onClick={() => props.setSwitchOn(false)}> off</div>
            <div style={indicatorStyle}></div>

            {/*{props.button && <button className={s.buttonOn}>on</button>}*/}
            {/*{!props.button && <button>on</button>}*/}
            {/*{!props.button && <button className={s.buttonOff}>off</button>}*/}
            {/*{props.button && <button>off</button>}*/}
            {/*{props.button && <button className={s.buttonCircleGreen}></button>}*/}
            {/*{!props.button &&<button className={s.buttonCircleRed}></button>}*/}
        </div>
    )
}
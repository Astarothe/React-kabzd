import s from "./UncontrolledOnOff.module.css";
import {useState} from "react";

export type UncontrolledOnOffPropsType = {
    // setOnOffValue: (value:boolean) => void
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    let [on, setOn] = useState(false);

    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"

    };
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    };
    let indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={() => onClicked}>on
            </div>
            <div style={offStyle} onClick={() => offClicked}> off
            </div>
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
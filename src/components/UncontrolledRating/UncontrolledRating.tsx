import React, {SetStateAction, useState} from "react";
import {spawn} from "child_process";

export function UncontrolledRating() {
    const [starValue, setStarValue] = useState(0);

    return (
        <div>
            <Star selected={starValue > 0} setStarValue={setStarValue} value={1}/>
            <Star selected={starValue > 1} setStarValue={setStarValue} value={2}/>
            <Star selected={starValue > 2} setStarValue={setStarValue} value={3}/>
            <Star selected={starValue > 3} setStarValue={setStarValue} value={4}/>
            <Star selected={starValue > 4} setStarValue={setStarValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setStarValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.setStarValue(props.value)}>
            {props.selected ? <b>star </b> : "star "}
        </span>
    )
}

import React, {useEffect, useState} from "react"

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render(componentDidMount)")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    }, []);

    return <>
        Hello, counter: {counter}
    </>
}


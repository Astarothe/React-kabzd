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

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, []);

    return <>
        Hello, counter: {counter}
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered with: " + counter)

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("RESET EFFECT: " + counter)
        }
    }, [counter]);

    const increase = () => setCounter(counter + 1)

    return <>
        Hello, counter: {counter}
        <button onClick={increase}></button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with: " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.code)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, []);

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with: " + text)

    useEffect(() => {
     const timeoutId = setTimeout(() => {
          setText("3 second passed")
      },3000)

        return () => {
         clearTimeout(timeoutId)
        }
    }, []);

    return <>
        Typed text: {text}
    </>
}

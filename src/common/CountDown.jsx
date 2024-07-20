import React, { useEffect, useState, useRef } from 'react'
import formatTimer from '../utils/fomatTimer'

function CountDown({ seconds }) {
    const [countdown, setCountDown] = useState(seconds)
    const timerID = useRef()

    useEffect(() => {
        timerID.current = setInterval(() => {
            setCountDown((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(timerID.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerID.current)
            return
        }
    }, [countdown])

    return (
        <span>{formatTimer(countdown)}</span>
    )
}

export default CountDown
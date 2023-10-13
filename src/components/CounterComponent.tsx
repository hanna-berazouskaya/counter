import React, {useState} from "react";
import './CounterComponent.css'
function useCounter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const resetCounter = () => {
        setCounter(0);
    };

    return {
        counter,
        incrementCounter,
        resetCounter,
    };
}

export function CounterComponent() {
    const { counter, incrementCounter, resetCounter } = useCounter();

    const counterStyle = {
        color: counter === 5 ? 'red' : '#1e2027',
    };


    return (
        <div className="item">
            <div className="counter-display" style={counterStyle}>{counter}</div>
            <div className="styleBtn">
                <button className="increment-button" onClick={incrementCounter} disabled={counter === 5}>
                    inc
                </button>
                <button className="reset-button" onClick={resetCounter} disabled={counter === 0}>
                    reset
                </button>
            </div>
        </div>
    );
}
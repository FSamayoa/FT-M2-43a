import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (event) => {
        event.target.name === 'increment'
        ? setCount(count + 1)
        : setCount(count - 1)
    }

    useEffect(() => {
        console.log('se montó el componente');

        return () => setCount(0);
    }, []);

    return(
        <div style={{ backgroundColor: 'pink', padding: '20px', color: 'black', borderRadius: '20px'}}>
            <h1>Counter</h1>

            <button name="decrement" onClick={handleClick}>-</button>
            <p>{count}</p>
            <button name="increment" onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter;
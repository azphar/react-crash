import React, { useState } from 'react';

function Counter() {
    const [arr, SetArr] = useState([])

function addPlus() {
    SetArr(prevArr => [...prevArr, "+" ])
}

function addMinus() {
    SetArr(prevArr => [...prevArr, "-" ])
}


    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    );
}
export default Counter;

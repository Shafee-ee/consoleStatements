import React, { useState } from 'react'

const expensiveCalc = (num) => {
    console.log(`Running Expensive Calc....`);
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
        total += i * num;
    }
    return total;
}

const ExpensiveCalc = () => {
    const [number, setNumber] = useState(1);
    const [themeDark, setThemeDark] = useState(false);


    const theme = {
        backgroundColor: themeDark ? "#333" : "#fff",
        color: themeDark ? "#fff" : "#000"
    }



    const calc = expensiveCalc(number);//unoptimized?

    return (
        <div>
            <input type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                className='' />

            <button
                onClick={() => setThemeDark(prev => !prev)}
            >
                Toggle Theme
            </button>
            <p className=''>Result:{calc}</p>
        </div>
    )
}

export default ExpensiveCalc
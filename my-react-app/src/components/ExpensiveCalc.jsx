import React, { useMemo, useState } from 'react'

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

    // const calc = useMemo(() => expensiveCalc(number), [number]);




    return (
        <div style={theme}>
            <input type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                className='' />

            <button
                className='bg-green-600 px-5 py-2 rounded mt-4'
                onClick={() => setThemeDark(prev => !prev)}
            >
                Toggle Theme
            </button>
            <p className=''>Result:{calc}</p>
        </div>
    )
}

export default ExpensiveCalc
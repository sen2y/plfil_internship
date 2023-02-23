import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);
    const onDecrease = () => {
        setNumber(number - 1);
    }

    const list = [
        { id: 0, titile: 'asd' },
        { id: 1, titile: 'aqw' },
        { id: 2, titile: 'twe' },
        { id: 3, titile: 'dfhdfh' },
        { id: 4, titile: 'ajjdfdg' },
        { id: 5, titile: 'weeg' },
    ]


    return (
        <>
            <div>
                안녕하세요 <br /> <input /><button>Button</button>
            </div>
            {list.map((item, index) => (
                <div key={"list" + index}>{item.titile}</div>
            ))}
            <div>
                <h1>{number}</h1>
                <button onClick={() => { setNumber(number + 1) }}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </>
    );
}

export default Counter;  // Counter 컴포넌트 내보낸다는 의미
import React, { useState, useEffect } from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    useEffect(() => {
        //마운트 될 때
        console.log('컴포넌트 화면에 나타남')

        return () => { // 일종의 뒷정리 함수
            //언마운트 될때, clearInterval, clearTimeout, 라이브러리 인스턴스 제거
            console.log('변경')
        }
    }, [text]) // [] 비어있으면 처음 화면에 나타날때만 실행

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onDelete = () => {
        setText('');
    }

    return (
        <div>
            <input placeholder="이름" />
            <input placeholder="닉네임" />
            <input onChange={onChange} value={text} />

            <button onClick={onDelete}>초기화</button>
            <div>
                <b>값: </b>
                이름 (닉네임)
                {text}
            </div>

        </div>
    )
}

export default InputSample;
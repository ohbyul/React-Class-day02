import React from 'react';

const Test2 = () => {
    
    //함수 영역
    const title = '신상 명세서';
    const name = '강호동';
    const age = 20;


    return (
        <>
            <h2>JSX 변수사용 : {title} </h2>
            {/* JSX 영역에서 자바스크립트의 값을 출력할경우에는 반드시 {} 안에 써야한다. */}
            <ul>
                <li>이름 : {name} </li>
                <li>age : {age} </li>
            </ul>
        </>
    );
};

export default Test2;
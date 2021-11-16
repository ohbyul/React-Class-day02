import React from 'react';


//파일명은 대소문자 상관없다 -> aaa.js , aaa.jsx
//js 파일은 컴포넌트라고 한다.
//컴포넌트명 반드시 첫글자가 대문자여야한다.



const Aaa = () => {
    //함수 영역
    return (
        <div>
            <h1>Aaa 컴포넌트 입니다.</h1>
            <h2>JSX 영역</h2>
        </div>
    );
};

export default Aaa;
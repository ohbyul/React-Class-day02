import React from 'react';

const Test3 = () => {
    const txt = '오늘은 화요일 입니다.';
    const style1 = {
        backgroundColor : 'red', fontSize : 25 , padding : 20
    }
    const style2 = {
        backgroundColor : 'green', fontSize : 10 , padding : 20
    }
    return (
        <>
            {/* 
                style 속성값에 일반 문자열이 아닌 자바스크립트
                객체가 할당 css 속성은 카멜케이스 방식 -JQuery 객체형식
                객체형식으로 css 처리
                {backgroundColor : '' , FontSize,textIndent : 20}
            */}

            <h2>JSX 영역 : style</h2>
            <p style ={style1}> {txt} </p>
            <p> {txt} </p>
            <p style = {style2}> {txt} </p>
            <p> {txt} </p>
            <p style = {{fontSize : 30}}> {txt} </p>
            <p> {txt} </p>



        </>
    );
};

export default Test3;
import React, { Fragment } from 'react';

const Test1 = () => {
    return (
        <Fragment>
            <h2>JSX TEST</h2>
            <h3>문법</h3>
            <p>
                처음 시작은 주로 div로 묶어준다.
                한줄은 상관이 없지만
                그 이상은 반드시 그룹형 또는 div로 묶어야한다.
                Fragment = 그룹 Fragment지워도 상관없다.    
            </p>
            <input type = "text" />
            <img src ="" alt= "" />
            <br />
            <hr /> 
            {/* 컨트롤 + 슬러쉬  = 주석 */}

            <p
                //한줄주석
                /*여러줄 주석 */
            >
                안녕하세요 ^^ 태그안에 주석 가능 하다. 
            </p>
        </Fragment>
    );
};

export default Test1;
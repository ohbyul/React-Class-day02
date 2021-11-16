import React from 'react';
import Aaa from './components/aaa';
import Test1 from './components/Test1';
//import 참조변수 from '파일명.js'; js는 생략가능

const App = () => {

  return (
    <div>
      {/*
      Reactjs code snippets 확장 프로그램
      rsc 입력 후 엔터
       */}
       연습입니다. 
       <br/>
       <br/>
       자식컨퍼넌트 : 
       <Aaa/>
       <br/>
       자식컨퍼넌트는 여러번 사용 가능
       <br/>
       <Aaa/>
       <hr/>
       <Aaa/>
       <hr/>
       <Aaa/>
       <hr/>
       <Test1 />
    </div>
  );
};

export default App;
import React from 'react';
import Aaa from './components/aaa';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
//import 참조변수 from '파일명.js'; js는 생략가능

const App = () => {

  return (
    <div>
       자식컨퍼넌트 : 
       <Aaa/>
       자식컨퍼넌트는 여러번 사용 가능
       <Aaa/>
       <hr/>

       <Test1 />
       <hr/>
       <Test2 />
       <hr/>        
       <Test3 />

    </div>
  );
};

export default App;
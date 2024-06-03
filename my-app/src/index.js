import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root라는 id를 가진 DOM 요소를 찾아서 그것을 루트로 사용하도록 설정함(public/index.html에 존재함)

root.render( //루트를 통해 React 요소를 렌더링한다 -> 즉, <App/> 컴포넌트가 렌더링되어 DOM에 삽입된다.
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //<React.StrictMode> : Strict Mode는 개발 중 일부 문제를 검사하고 결고를 표시해서 
  //                      개발자에게 앱의 잠재적인 문제를 알려준다
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {


  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");


  useEffect(()=>{

    //요청 -> 서버
    // react(브라우저) -> spring (서버)
    // http://localhost:3000 -> http://localhost:80

    fetch("/test1")
    .then(resp => resp.json())
    .then(data =>{
      setMessage(data);
    });

  }, []) //빈 배열만 선언 시 선언한 함수를 처음 렌더링 될 때만 요청한다

// key : 화면에 반복되는 요소를 각각 식별하기 위해 key 값을 idx 번호를 이용해서 넣어준거임
// 어떤 값을 넣어도 겹치지만 않으면 상관없다 (콘솔창에서 key 넣으라고 문구 뜸)

  const handelClick = ()=>{
    fetch("/test2", {
      method : "POST",
      headers : {"Content-Type":"application/json"},
      body:JSON.stringify({
        name : "홍길동",
        age : 15
      })
    }).then(resp=>resp.text())
    .then(data=> setMessage2(data)) //응답값으로 받아온 data("홍길동 님은 .. 입니다")를 setMessage2에 담을거임
  }


  //   브라우저 및 node.js 환경에서 
  // 비동기 요청을 쉽게 처리할 수 있게 해주는 js 라이브러리
  // 터미널에서 npm / yarn 등의 패키지 매니저를 통해 설치함

  //1. post 요청 시 데이터를 자동으로 JSON 형태로 처리해주니까
  //   fetch와 달리 JSON.stringify를 명시적으로 호출할 필요가 없다
  //2. 응답을 JSON으로 자동 파싱하기 때문에 fetch처럼 두번째 then으로 응답을 파싱할 필요가 없다
  //3. headers와 body를 명시적으로 설정하지 않아도 된다
  //   headers의 경우는 기본적으로 Content-Type : application/json으로 설정돼 있다
  //   단, header의 내용 변경이 필요할 시 명시적으로 작성해야 한다.
  const axiosTest=()=>{

    axios.post("/test2",{
      name : "김유저",
      age : 17
    }).then(res => {
      console.log(res);

      setMessage3(res.data);
    })

  }


  return (
    <ul>
      {message.map((el,idx) => <li key={idx}>{el}</li>)}


      <hr/>
      <button onClick={handelClick}>fetch로 서버 통신</button>
      <br></br>
      <h1>{message2}</h1>

      <hr/>
      <button onClick={axiosTest}>axios로 서버 통신</button>
      <br></br>
      <h1>{message3}</h1>


    </ul>
  );
}

export default App;
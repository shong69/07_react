import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/Exam1';
import Exam2 from './exam/exam2';

//터미널 열기 ctrl + shift + `
//터미널에서 yarn 서버 키기 yarn start
//터미널에서 ctrl + c로 서버 끄기
function App() {
  return (
    <div>
      {/* 여러가지 컴퓨넌트를 불러다 쓸겁니다 */}
      {/* ctrl + /  : jsx 주석임*/}
      <Exam1 />
      <Exam2 />
      {/* Exam1 inport하기! */}
    </div>
  );
}

export default App;

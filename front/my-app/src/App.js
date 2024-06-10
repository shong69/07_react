import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/Exam1';
import Exam2 from './exam/Exam2';
import Exam3 from './exam/Exam3';
import Exam4 from './exam/Exam4';
import Exam5 from './exam/Exam5';
import Exam6_1, {Exam6_2, Exam6_3} from './exam/Exam6';
import { ThemeProvider } from './contextAPI/ThemeContext';
import ThemeToggle from './contextAPI/ThemeToggle';
import ThemeComponent from './contextAPI/ThemeComponent';

//터미널 열기 ctrl + shift + `
//터미널에서 yarn 서버 키기 yarn start
//터미널에서 ctrl + c로 서버 끄기
function App() {
  return (
    <div className='App'>
      {/* 여러가지 컴퓨넌트를 불러다 쓸겁니다 */}
      {/* ctrl + /  : jsx 주석임*/}
      {/* Exam1 inport하기! */}
      {/*<Exam1 />
      <Exam2 />*/}
      {/* <Exam3 />
      <Exam4 />
      <Exam5 /> */}
      {/* <Exam6_1 isLogin={false}/>
      <Exam6_2/> */}
      {/* <Exam6_3 label="클릭해보세요~"/> */}
      <ThemeProvider>
        <ThemeToggle/>
        <ThemeComponent/>
      </ThemeProvider>

    </div>
  );
}

export default App;

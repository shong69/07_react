[test.js]

import { useState } from 'react';

function test() {

    const [todoList, setTodoList] = useState([

        { title : "React 개념정리", isComplete : false },
        { title : "도서관에 책 반납하기", isComplete : true }

    ]);

    const [inputTodo, setInputTodo] = useState("");
    const [inputValue, setInputValue] = useState("");

    const changeTodo = (e) => {

        setInputValue(e.target.value);

    }

    const addTodo = () => {

        setTodoList([...todoList, { title: inputTodo , isComplete : false }]);

        setInputTodo("");
    }

    return (

        <div class="container">

            <table border={1}>

                <thead>

                    <tr>

                    <th>할 일 내용</th>

                    <th>완료 여부</th>

                    </tr>

                </thead>

                <tbody>

                    {todoList.map(el => {

                        <tr>

                            <td>{el.title}</td>

                            <td>{el.isComplete ? "완료" : "미완료"}</td>

                        </tr>

                    })}

                </tbody>

            </table>

            <div className='inputDiv'>

                <input type='text' value={inputValue} onChange={changeTodo}></input>

                <button onClick={addTodo}>할 일 등록</button>

            </div>

        </div>

    );

}

// export default test;

// import { useState } from 'react';

// function App() {

//     const [todoList, setTodoList] = useState([

//         { title : "React 개념정리", isComplete : false },
//         { title : "도서관에 책 반납하기", isComplete : true }

//     ]);

//     const [inputTodo, setInputTodo] = useState("");

//     const changeTodo = (e) => {
//       setInputTodo(e.target.value);
//     }

//     const addTodo = (index) => {
//       setTodoList([...todoList, { title: inputTodo , isComplete : false }]);

//       setInputTodo("");
//     }

//     return (
//       <div class="container">

//           <table border={1}>

//               <thead>

//                   <tr>

//                     <th>할 일 내용</th>

//                     <th>완료 여부</th>

//                   </tr>

//               </thead>

//               <tbody>
//                   {todoList.map((el, index) => (

//                       <tr key={index}>

//                           <td>{el.title}</td>

//                           <td>{el.isComplete ? "완료" : "미완료"}</td>

//                       </tr>

//                   ))}

//               </tbody>

//           </table>

//           <div className='inputDiv'>

//               <input type='text' value={inputTodo} onChange={changeTodo}></input>

//               <button onClick={addTodo}>할 일 등록</button>

//           </div>

//       </div>

//     );

// }
// export default App;
//State & Props

import { useState } from "react";

//Props Drilling : 상태 내리꽂기
//props를 통해 데이터를 전달할 때, 자식 컴포넌트에서 필요하지 않은 prop를 계속해서 전달하는 행위]
//->코드의 가독성 및 유지보수성을 떨어뜨린다.
// --> React의 Context api나 Redux 같은 상태관리 라이브러리를 사용한다

//Exam4 >Child1 > Child2 > Child3 > MyComponent 이런 식으로 부모자식 관계가 연결돼있을 때
//Exam4의 상태값을 MyComponent에서 사용해야 한다면?

//부모 컴포넌트
function Exam4() {
    const [name, setName] = useState("홍길동");

    const handleClick=()=>{  //버튼 클릭 시 이름 변경되도록
        setName("백종원");
    }

    return(
        <>
            <Child1 name={name}/>
            <button onClick={handleClick}>이름 변경</button>
        </>
    );
}

function Child1(props){
    return <Child2 name={props.name}/>
}

function Child2(props){
    return <Child3 name={props.name}/>
}

function Child3(props){
    return <MyComponent name={props.name}/>
}

//자식 컴포넌트
function MyComponent(props){
    //props는 Exam4에서부터 내리꽂기를 통해 전달받은 부모의 상태값이다

    return <h1>{props.name}</h1>
}

export default Exam4;
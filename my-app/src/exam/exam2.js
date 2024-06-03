//Component 예제2

import { useState } from "react";

//함수형 컴포넌트

function Exam2() {

    //함수형 컴포넌트에서 상태를 사용하는 방법
    const [name, setName] = useState("김송"); //useState라는 hook에 김송이라는 상태값을 넣은거임
    //Hooks : 기능 모음들
    
    const handleClick=()=>{
        setName("조진웅");
    }

    return ( //함수형 컴포넌트는 render() 함수를 제외하고 바로 return을 작성하면 된다
        <div>
            <h1>hello, {name}</h1>
            <button onClick={handleClick}>이럼 바꺼기~!</button>
        </div>
    );

}

export default Exam2;
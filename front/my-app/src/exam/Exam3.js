//State & Props

const { useState } = require("react");

//State lifting up : 상태 끌어올리기
//리액트에서는 부모 컴포넌트가 자식 컴포넌트의 상태를 직접 변경할 수 없다!!
//-> 자식에서 발생한 이벤트를 부모에서 처리하도록 하는 상태 끌어올리기 패턴을 이용한다.


// 해당 파일에서 컴포넌트 총 3개 존재
// Id  컴포넌트(자식)
// Pw  컴포넌트(자식)
// Exam3 컴포넌트(부모) - 해당 파일에서 내보낼 기본 컴포넌트

//props :{onChangeId, name, ..} ->prop에서 부모가 넘겨준 여러가지 값을 가지고 있음
// Id 컴포넌트( 자식 )
const Id=(props)=>{ //화살표 함수 사용 가능 , 
        //부모에게서 전달받은 속성을 props라고 부른다
    const {onChangeId} = props;  //props 안에 있는 onChangeId라는 이름의 함수를 이용할 수 있게 됨


    const [id, setId] = useState(""); //hook으로 상태값 관리하기
    //상태(state) 중 'id'를 생성하고 초기값으로 빈문자열 "" 설정함
    //setId를 지정해서 id 값을 설정해 주면 된다. 대괄호에 두번째 인자로 들어오는 요소는 첫번째 인자를 세팅해주는 함수임
    //->앞 인자에 set을 붙여서 이름지어야 한다

    return(
        //JSX를 사용한 html구문 작성부는 무조건 최상위 부모태그 하나로 감싸져 있어야 한다.!!
        <>
            <div>
                <label>ID : </label>
                <input onChange={onChangeId}/>
                {/* onChange 이벤트 핸들러에 onChangeId를 연결함*/}
            </div>
        </>

    );

}
// Pw 컴포넌트( 자식 )
const Pw=({onChangePw})=>{ //화살표 함수 사용 가능
        //props에서 바로 꺼내와서 쓰는 방식 :{}를 이용해서 props 안의 값을 꺼내 쓴다 
    const [pw, setPw] = useState("");  //상태(state) 중 'pw'를 생성하고 초기값으로 빈문자열 "" 설정함

    return(
       
        <>
            <div>
                <label>PW : </label>
                <input onChange={onChangePw}/>
            </div>
        </>

    );

}



//Exam3 컴포넌트 ( 부모 )
const Exam3=() => {

    //자식의 상태를 부모에서 정의(상태 끌어올리기)
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    // 자식의 상태를 변경할 수 있는 함수 정의
    const onChangeId=(e)=>{
        setId(e.target.value);
    }
    const onChangePw=(e)=>{
        setPw(e.target.value);
    }

    return(
        <>
            {/* 컴포넌트 중 Id,Pw를 불러 렌더링함 (Id,Pw가 Exam3의 자식이 됨) */}
            <Id onChangeId={onChangeId}/> {/*onchageId라는 이름으로 onchangeId 함수가 넘어감*/}
            <Pw onChangePw={onChangePw}/>

            <div>
                {/* button 의 disabled 속성 : 비활성화 속성( 비활성 true / 활성 false
                    -> id와 pw 둘 다 작성돼야 버튼을 활성화 시킬 거임
                ) */}
                <button disabled={id.length===0 || pw.length ===0}>Login</button>
            </div>
        </>
    );
}



export default Exam3;

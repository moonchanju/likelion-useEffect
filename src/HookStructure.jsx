import React, {useState,useEffect} from 'react'

const HookStructure = () => {
    const [count,setCount]= useState(0);
    const [text,setText] = useState("빈텍스트"); 

    useEffect(()=>{
        console.log("컴포넌트가 마운트됨.");
    },[]);
   // 처음만 실행행
    useEffect(()=> {
        console.log("카운트가 변경되었음",count);
    },[count]);
   //값이 바뀔때 마다 실행행
    useEffect(()=>{
        console.log("텍스트가 변경되었음",text);
    },[text]);
    useEffect(()=>{
        console.log("매 랜더링 마다 실행");
    })
    // 의존성배열이 없는 경우 , 매랜더링마다 실행행
  return (
    <div>
      count: {count}
      <button onClick={()=>setCount(count+1)}>증가</button>
      <hr className="text-gray-200" />
      <h2 className="text-2xl">Typed text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
      />
      
    </div>
  )
}

export default HookStructure

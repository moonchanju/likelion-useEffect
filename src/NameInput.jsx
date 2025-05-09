import React, { useState } from 'react'

const NameInput = () => {
    const[name,setName]=useState("");
    const handleChange=(e)=> {
        setName(e.target.value);
    }
      // 스타일 변수 정의 해서 className으로 정의해줌.
  const headingStyle = "text-2xl font-bold mb-4";
  const inputStyle = "border border-gray-300 rounded px-3 py-2 w-50 mb-4";
  const greetingStyle = "text-lg text-blue-600 font-medium";
  const nameStyle = "text-orange-600";
  return (
    <div>
      <h2 className={headingStyle}>이름을 입력하세요</h2>
      <input className={inputStyle} type="text"  onChange={handleChange} />
      <p className={greetingStyle}>
        안녕하세요, <span className={nameStyle}> {name}</span>님!
      </p>
    </div>
  )
}

export default NameInput

// ! input 컴포넌트 조립 시 <form></form> 안에 넣어주는 거 잊지말자!
import React from 'react';

const InputPwd = () => {
  const LoginSignUpInputStyle = {
    width: '100%',
    height: '54px',
    backgroundColor: '#D9D9D9',
    border: '1px solid #D9D9D9',
    borderRadius: '20px',
    textAlign: 'center'
  }
  return (
    <div>
      <p><b>password</b></p>
          <div><input type="password" placeholder='password를 입력하세요' name='password' style={LoginSignUpInputStyle}></input></div>
    </div>
  );
};

export default InputPwd;